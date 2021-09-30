import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-snipper',
  templateUrl: './progress-snipper.component.html',
  styleUrls: ['./progress-snipper.component.scss']
})
export class ProgressSnipperComponent {
  color = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
