import { MediaMatcher } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef,
  OnDestroy
} from "@angular/core";
import { MenuItems } from '../../shared/services/menu-items/menu-items';
import { fromEvent, Observable, of } from "rxjs";
import { map, share, tap, throttleTime } from "rxjs/operators";
import { ScrollService } from "../../shared/services/scroll/scroll.service";

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.scss'],
  providers: [
    ScrollService
  ]
})
export class FullComponent implements AfterViewInit, OnDestroy {
  mobileQuery: MediaQueryList;
  opened: boolean;
  scroll$: Observable<number> = of(0);
  showHeader$: Observable<boolean> = of(false);

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private elementRef: ElementRef,
    private scrollDirectionService: ScrollService
  ) {
    this.opened = false;
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngAfterViewInit() {
    const el = this.elementRef.nativeElement.querySelector('.page-wrapper');
    const threshold = 300;
    this.scroll$ = fromEvent(el, 'scroll').pipe(
      throttleTime(20),
      map(() => el.scrollTop)
    );

    this.scrollDirectionService.setScroll(this.scroll$);

    this.showHeader$ = this.scroll$.pipe(
      map((scrollYPosition: number) => scrollYPosition > threshold),
    );

    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  toggle() {
    this.opened = !this.opened;
  }

  connectWallet() {
    alert('Connect to MetaMask Wallet');
  }
}
