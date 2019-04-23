import { Observable } from 'rxjs';
import { VideoDataService } from './../video-data.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videos: Observable<Video[]>;
  selectedVideo: Video;

  constructor(svc: VideoDataService) {
    this.videos = svc.loadVideos()
    .pipe(
      tap(videos => this.selectedVideo = videos[0])
    );
  }

  ngOnInit() {
  }

}
