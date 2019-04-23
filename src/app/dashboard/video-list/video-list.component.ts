import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output() videoSelected = new EventEmitter<Video>();
  selectedVideo?: Video;

  constructor() { }

  ngOnInit() {
    this.selectedVideo = this.videos[0];
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }
}
