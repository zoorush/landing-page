import { InjectionToken } from '@angular/core';
import Web3 from 'web3';
export const WEB3 = new InjectionToken<Promise<Web3>>('web3');
