import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavComponent } from './components/nav/nav.component';
import { VideosComponent } from './components/videos-list/videos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    VideosComponent,
    LoadingSpinnerComponent,
    ServerErrorComponent,
    VideoDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
