import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { VideoDataService } from '../video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  standalone: false
})
export class VideoPlayerComponent implements OnInit {
  video: Observable<Video>;

  constructor(ar: ActivatedRoute, svc: VideoDataService) {
    this.video = ar.queryParams.pipe(
      map(params => params['selectedVideoId']),
      filter(id => id),
      switchMap(id => svc.getVideo(id)),
    );
   }

  ngOnInit() {
  }

}
