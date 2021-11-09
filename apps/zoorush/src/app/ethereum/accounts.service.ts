import { Inject, Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import Web3 from 'web3';
import { WEB3 } from './tokens';

type AccountChangedCallback = (provider: any, accounts: string[]) => void;
type ChainChangedCallback = (provider: any, chainId: number) => void;
type ConnectedCallback = (provider: any, info: { chainId: number }) => void;
type DisconnectedCallback = (
  provider: any,
  error: { code: number; message: string }
) => void;
const noop = () => {};

export interface EthereumHooks {
  onConnect?: ConnectedCallback;
  onDisconnect?: DisconnectedCallback;
  onAccountChanges?: AccountChangedCallback;
  onChainChanges?: ChainChangedCallback;
}

@Injectable()
export class AccountsService {
  web3: Web3 | undefined;

  constructor(@Inject(WEB3) web3$: Promise<Web3>) {
    web3$.then((web3) => (this.web3 = web3));
  }

  /** Return the list of accounts available */
  public getAccounts(hooks?: EthereumHooks): Observable<string[]> {
    const {
      onConnect,
      onDisconnect,
      onAccountChanges,
      onChainChanges,
    }: Required<EthereumHooks> = {
      onConnect: noop,
      onDisconnect: noop,
      onAccountChanges: noop,
      onChainChanges: noop,
      ...hooks,
    };

    if (this.web3?.currentProvider) {
      return from(
        (this.web3?.currentProvider as any).request({
          method: 'eth_requestAccounts',
        }) as Promise<string[]>
      ).pipe(
        catchError((err) => []),
        mergeMap((accounts: string[]) => {
          if (
            Array.isArray(accounts) &&
            accounts.length > 0 &&
            typeof accounts[0] === 'string'
          ) {
            (this.web3?.currentProvider as any).on(
              'accountsChanged',
              this.handleAccountChanges(
                this.web3?.currentProvider,
                onAccountChanges
              )
            );
            (this.web3?.currentProvider as any).on(
              'chainChanged',
              this.handleChainChanges(
                this.web3?.currentProvider,
                onChainChanges
              )
            );
            (this.web3?.currentProvider as any).on(
              'connect',
              this.handleConnect(this.web3?.currentProvider, onConnect)
            );
            (this.web3?.currentProvider as any).on(
              'disconnect',
              this.handleDisconnect(this.web3?.currentProvider, onDisconnect)
            );
            return from(
              (this.web3?.currentProvider as any).request({
                method: 'eth_accounts',
              }) as Promise<string[]>
            ).pipe(
              map((accounts) => accounts.map((acc) => acc.toLowerCase()))
            );
          } else {
            return throwError(new Error('No Accounts Returned.'));
          }
        })
      );
    } else {
      return of([]);
    }
  }

  /** Get the current account */
  public currentAccount(hooks?: EthereumHooks): Observable<string | Error> {
    if (this.web3) {
      if (this.web3.eth.defaultAccount) {
        return of(this.web3.eth.defaultAccount);
      } else {
        return this.getAccounts(hooks).pipe(
          map((accounts: string[]) => accounts[0]),
          tap(
            (account: string) =>
              this.web3 && (this.web3.eth.defaultAccount = account.toLowerCase())
          ),
          catchError((err: Error) => of(err))
        );
      }
    } else {
      throw new Error('No Web3 Detected');
    }
  }

  handleAccountChanges =
    (provider: any, cb: AccountChangedCallback) => (accounts: string[]) => {
      cb(provider, accounts?.map((acc) => acc.toLowerCase()));
    };

  handleChainChanges =
    (provider: any, cb: ChainChangedCallback) => (chainId: number) => {
      console.log(chainId);
      cb(provider, chainId);
    };

  handleConnect =
    (provider: any, cb: ConnectedCallback) => (info: { chainId: number }) => {
      console.log(info);
      cb(provider, info);
    };

  handleDisconnect =
    (provider: any, cb: DisconnectedCallback) =>
    (error: { code: number; message: string }) => {
      console.log(error);
      cb(provider, error);
    };
}
