import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { AccountsService } from './accounts.service';
import { WEB3 } from './tokens';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    AccountsService,
    {
      provide: WEB3,
      useFactory: async () => {
        const provider = await detectEthereumProvider();
        if (provider) {
          return new Web3(
            provider ?? Web3.givenProvider
          );
        }
        return new Web3();
      },
    },
  ],
})
export class EthereumModule {}
