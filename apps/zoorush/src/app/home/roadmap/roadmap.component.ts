import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { roadMapId } from '../../shared/services/menu-items/menu-items';

interface Stage {
  id: string;
  title?: string;
  lines: {
    text: string;
    completed?: boolean;
  }[];
}

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class RoadmapComponent {
  id = roadMapId;

  stages: Stage[] = [
    {
      id: 'stage-0',
      lines: [
        { text: `Launch: Early visitors are let into the Zoo to walk around!` },
        {
          text: `->Mini-game drop: Mini MVP drop by ZooRush development engineers.
          ETH and NFT prizes for winners and lots of fun for all Zoo visitors!`,
        },
        {
          text: `Early game animation release:
          Graphics developers will share their first 3D mock-ups for the main ZooRush P2E game
          and back-end engineers provide first articles on logic and game mechanics!`,
        },
      ],
    },
    {
      id: 'stage-1',
      lines: [
        {
          text: `Mint: Members of the Zoo are first let out into the real world by 9,669 lucky minters.
          There will only be 9,669 characters (879 of each of the 11 characters).`,
        },
        {
          text: `Traits and rarity: Unique game traits of the characters are revealed`,
        },
      ],
    },
    {
      id: 'stage-2',
      lines: [
        {
          text: `Biggest giveaway: 10 ZooRush NFTs to most active early community members and top mini-game winners`,
        },
        {
          text: `Club creation: every character belongs to each ZooRush club`,
        },
        {
          text: `Whitepaper release:
          Developers share early game designs and mechanics incorporating feedback from Zoo members`,
        },
        {
          text: `Charity:5% Sales go to charitable organization (Discord voting)`,
        },
      ],
    },
    {
      id: 'stage-3',
      lines: [
        {
          text: `Beta release: of ZooRush main P2E game for early adopters and active community members`,
        },
        {
          text: `Exclusive American Football Online Quiz: for every Zoo club with ETH prizes for winners`,
        },
        {
          text: `Airdrop: Jerseys NFT collection airdrop for every ZooRush holder`,
        },
      ],
    },
    {
      id: 'stage-4',
      lines: [
        {
          text: `Main release: Release of main P2E ZooRush game. LFG!`,
        },
      ],
    },
    {
      id: 'stage-5',
      lines: [
        {
          text: `Marketplace: Creation of internal marketplace and game token`,
        },
        {
          text: `Growth:
           Additional collection announcements to expand number of game users (without loss of rarity for existing holders)`,
        },
      ],
    },
  ];

  trackById(_index: number, stage: Stage) {
    return stage.id;
  }
}
