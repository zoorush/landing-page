import { Component, OnDestroy } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnDestroy {
  subscriptions = new Subscription();
  api!: VgApiService;
  supportedSourceTypes = [
    {
      type: 'webm',
    }, {
      type: 'mp4',
    },
  ];
  sources: { src: string }[];
  shouldRestart: boolean = false;
  showOverlay: boolean = true;

  constructor() {
    this.sources = [
      {
        src: 'promo',
      },
    ];
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
    const video = this.api.getDefaultMedia();


    this.subscriptions.add(
      video.subscriptions.loadStart.subscribe(() => {
        // Set the video to the beginning
        // console.log(this.api.getDefaultMedia().currentTime);
        this.api.getDefaultMedia().currentTime = 1;
        this.shouldRestart = true;
      })
    );

    this.subscriptions.add(
      video.subscriptions.ended.subscribe(() => {
        // Set the video to the beginning
        // console.log(this.api.getDefaultMedia().currentTime);
        this.api.getDefaultMedia().currentTime = 23;
        this.shouldRestart = true;
        this.showOverlay = true;
      })
    );

    this.subscriptions.add(
      video.subscriptions.playing.subscribe(() => {
        this.showOverlay = false;
        // Set the video to the beginning
        if (this.shouldRestart) {
          video.currentTime = 0;
          this.shouldRestart = false;
        }
      })
    );

    this.subscriptions.add(
      video.subscriptions.pause.subscribe(() => {
        this.showOverlay = true;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
