import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'error',
    component: ServerErrorComponent,
  },
  {
    path: 'video/:id',
    component: VideoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
