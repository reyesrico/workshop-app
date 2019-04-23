import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './interfaces';
import { map } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos')
    .pipe(
      map(videos => videos.filter(video => video.title.startsWith('Angular')))
    );
  }
}
