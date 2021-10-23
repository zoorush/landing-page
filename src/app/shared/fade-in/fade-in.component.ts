import { Component, ElementRef, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss']
})
export class FadeInComponent implements OnInit {
  @Input() direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none';
  @Input() delay: string | number = 0;
  isVisible: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => this.setVisible(entry.isIntersecting));
    });
    observer.observe(this.elementRef.nativeElement);
  }

  setVisible(visible: boolean) {
    setTimeout(() => this.isVisible = visible, Number(this.delay))
  }

}
