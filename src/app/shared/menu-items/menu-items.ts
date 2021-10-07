import { Injectable } from '@angular/core';

const newPlayerId = '#new-player';
const gameId = '#game';
const teamId = '#team';
const roadMapId = '#road-map';

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
  { state: roadMapId, type: 'anchor', name: 'Road Map' },
  { state: 'lounge', name: 'Player Lounge', type: 'link' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
