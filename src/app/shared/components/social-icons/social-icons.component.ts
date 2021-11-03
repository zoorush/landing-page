import { Component } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent {
  socialIcons = [
    {
      name: 'twitter',
      icon: faTwitter,
      link: 'https://twitter.com/ZooRushNFT',
    },
    {
      name: 'discord',
      icon: faDiscord,
      link: 'https://discord.gg/Ar5NKGHY',
    },
  ];
}
