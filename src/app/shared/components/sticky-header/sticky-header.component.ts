import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: [
    './sticky-header.component.scss',
  ],
})
export class StickyHeaderComponent {
  @Input() isVisible: boolean | null = null;
}
