import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/interface/video.interface';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videoArr: any;
  constructor(
    private _http: HttpClient,
    private _videoService: VideoServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getVideoList();
  }

  getVideoList() {
    this._videoService.getVideos().subscribe(
      (results: Video) => {
        this.videoArr = results;
        console.log(this.videoArr);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
