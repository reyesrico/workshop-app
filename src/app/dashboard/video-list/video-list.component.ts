import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Video } from '../interfaces';
import { map } from 'rxjs/operators';
import { VideoItemComponent } from '../video-item/video-item.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, VideoItemComponent],
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  selectedVideoId: Observable<string>;

  constructor(ar: ActivatedRoute) {
    this.selectedVideoId = ar.queryParams.pipe(
      map(params => params['selectedVideoId'])
    );
   }
}
