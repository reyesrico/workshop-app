import { Routes } from '@angular/router';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

export const dashboardRoutes: Routes = [
  { path: '', pathMatch: 'full', component: VideoDashboardComponent },
  { path: ':videoId', component: VideoPlayerComponent },
];
