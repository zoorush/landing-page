import { Injectable } from '@angular/core';

export const newPlayerId = 'new-player';
export const gameId = 'game';
export const teamId = 'team';
export const roadMapId = 'roadmap';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon?: string;
  badge?: {
    type: string;
    value: string;
  }[];
}

const MENUITEMS = [
  { state: newPlayerId, name: 'Become a Player', type: 'anchor' },
  { state: gameId, type: 'anchor', name: 'The Game' },
  { state: teamId, type: 'anchor', name: 'Team' },
  { state: roadMapId, type: 'anchor', name: 'Roadmap' },
  { state: 'lounge', name: 'Player Lounge', type: 'link' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
