import { Component } from '@angular/core';
import {
  gameId,
  newPlayerId,
  teamId,
} from '../shared/services/menu-items/menu-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  gameId = gameId;
  newPlayerId = newPlayerId;
  teamId = teamId;
}
