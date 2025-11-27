import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Video } from '../interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  standalone: false
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
