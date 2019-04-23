import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnChanges {
  @Input() videos: Video[];
  @Output() videoSelected = new EventEmitter<Video>();
  selectedVideo?: Video;

  constructor() { }

  ngOnChanges() {
    this.selectVideo(this.videos[1]);
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }
}
