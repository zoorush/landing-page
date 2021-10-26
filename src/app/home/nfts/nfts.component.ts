import { Component, OnInit } from '@angular/core';
import { NFT } from '../../shared/components/sticker/sticker.component';
import { newPlayerId } from "../../shared/services/menu-items/menu-items";

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
        image: 'nfts/0.png',
        description: '',
      },
      {
        image: 'nfts/3.png',
        description: '',
      },
      {
        image: 'nfts/6.png',
        description: '',
      },
      {
        image: 'nfts/9 2.png',
        description: '',
      },
      {
        image: 'nfts/9.png',
        description: '',
      },
      {
        image: 'nfts/14.png',
        description: '',
      },
      {
        image: 'nfts/15.png',
        description: '',
      },
      {
        image: 'nfts/20.png',
        description: '',
      },
      {
        image: 'nfts/31.png',
        description: '',
      },
      {
        image: 'nfts/37.png',
        description: '',
      },
      {
        image: 'nfts/38.png',
        description: '',
      },
      {
        image: 'nfts/40.png',
        description: '',
      },
      {
        image: 'nfts/41 2.png',
        description: '',
      },
      {
        image: 'nfts/41.png',
        description: '',
      },
      {
        image: 'nfts/54 2.png',
        description: '',
      },
    ].map((nft: Pick<NFT, 'image' | 'description'>, index: number) => ({
      ...nft,
      imageAlt: `nft-${index+1}`,
      name: `Bull ${index+1}`,
    }));
  }
}
