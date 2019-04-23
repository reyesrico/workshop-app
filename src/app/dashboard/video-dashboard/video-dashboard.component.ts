import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../interfaces';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videos: Video[] = [];
  selectedVideo: Video;

  constructor(http: HttpClient) {
    http.get<Video[]>(`${apiUrl}/videos`)
    .subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
  }

}
