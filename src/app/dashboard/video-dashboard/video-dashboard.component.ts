import { Component, OnInit } from '@angular/core';
import videoList from './video-list.js';
import { Video } from '../interfaces';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videos: Video[] = videoList;

  constructor() { }

  ngOnInit() {
  }

}
