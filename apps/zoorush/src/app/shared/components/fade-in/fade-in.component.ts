import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss'],
})
export class FadeInComponent implements OnInit {
  @Input() direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none';
  @Input() delay: string | number = 0;
  isVisible: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private scrollDirectionService: ScrollService
  ) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => this.setVisible(entry.isIntersecting));
    });
    observer.observe(this.elementRef.nativeElement);
    // this.scrollDirectionService.listenForScrollUp().subscribe(() => this.isVisible = false);
  }

  setVisible(visible: boolean) {
    setTimeout(
      () => (this.isVisible = this.isVisible || visible),
      Number(this.delay)
    );
  }
}
