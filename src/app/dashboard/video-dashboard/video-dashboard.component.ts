import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { VideoDataService } from './../video-data.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
  standalone: false
})
export class VideoDashboardComponent implements OnInit {
  videos: Observable<Video[]>;
  selectedVideo?: Video;

  constructor(svc: VideoDataService, ar: ActivatedRoute, router: Router) {
    const id$: Observable<string> = ar.queryParams.pipe(
      map(params => params['selectedVideoId'])
    );

    this.videos = combineLatest([svc.loadVideos(), id$]).pipe(
      tap(([videos, id]) => {
        if (!id) {
          router.navigate([], {
            queryParams: { selectedVideoId: videos[0].id }
          });
        }
      }),
      map(([videos]) => videos)
    );
  }

  ngOnInit() {
  }

}
