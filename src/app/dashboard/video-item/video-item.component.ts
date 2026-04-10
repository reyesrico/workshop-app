import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../interfaces';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class VideoItemComponent implements OnInit {
  @Input() video?: Video;

  constructor() { }

  ngOnInit() {
  }

}
