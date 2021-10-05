import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class AppHeaderComponent {
  validUser: boolean = false;

  connectWallet() {
    alert("Connect to MetaMask Wallet");
  }
}
