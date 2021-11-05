import { Component } from '@angular/core';
import { faHome } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss'],
})
export class MiniGameComponent {
  home = faHome;
}
