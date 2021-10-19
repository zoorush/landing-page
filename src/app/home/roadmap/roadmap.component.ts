import { Component } from '@angular/core';
import { roadMapId } from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent {
  id = roadMapId;
}
