import { Component, Input, OnInit } from '@angular/core';

export interface NFT {
  name: string;
  description: string;
  details?: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent {
  @Input() person!: NFT;
}
