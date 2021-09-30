import { Component } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class AppHeaderComponent {
  validUser: boolean = false;
  socialIcons = [{
    name: 'twitter',
    icon: faTwitter,
    link: 'http://twitter.com/ZooRush'
  }, {
    name: 'discord',
    icon: faDiscord,
    link: 'http://discord.com/ZooRush'
  }]

  connectWallet() {
    alert("Connect to MetaMask Wallet");
  }
}
