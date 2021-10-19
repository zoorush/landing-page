import { Component, Input, OnInit } from '@angular/core';

export interface NFT {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() person!: NFT;

  constructor() { }

  ngOnInit(): void {
  }

}
