import { Component, OnInit } from '@angular/core';
import { NFT } from '../../shared/components/sticker/sticker.component';
import { newPlayerId } from '../../shared/services/menu-items/menu-items';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss'],
})
export class NftsComponent implements OnInit {
  id = newPlayerId;
  nfts: NFT[] = [];

  constructor() {}

  ngOnInit(): void {
    this.nfts = [
      {
        image: 'nfts/Alabaster.png',
        name: `Alabaster`,
        description: 'Wolf',
      },
      {
        image: 'nfts/Bagheera.png',
        name: `Bagheera`,
        description: 'Panther',
      },
      {
        image: 'nfts/Bengal.png',
        name: `Bengal`,
        description: 'Tiger',
      },
      {
        image: 'nfts/Blitz.png',
        name: `Blitz`,
        description: 'Horse',
      },
      {
        image: 'nfts/Bulldozer.png',
        name: `Bulldozer`,
        description: 'Bull',
      },
      {
        image: 'nfts/King.png',
        name: `King`,
        description: 'Lion',
      },
      {
        image: 'nfts/Lambo.png',
        name: `Lambo`,
        description: 'Lamb',
      },
      {
        image: 'nfts/Rack the rocket.png',
        name: `Rack the rocket`,
        description: 'Raccoon',
      },
      {
        image: 'nfts/Rex.png',
        name: `Rex`,
        description: 'Dog',
      },
      {
        image: 'nfts/Staley.png',
        name: `Staley`,
        description: 'Bear',
      },
      {
        image: 'nfts/Thunder.png',
        name: `Thunder`,
        description: 'Falcon',
      },
    ].map(
      (nft: Pick<NFT, 'image' | 'description' | 'name'>, index: number) => ({
        ...nft,
        imageAlt: nft.name,
      })
    );
  }
}
