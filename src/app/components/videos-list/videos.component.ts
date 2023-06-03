import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Video } from 'src/app/interface/video.interface';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videoArr: any;
  dataLoading: boolean;
  show: boolean = false;
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _http: HttpClient,
    private _videoService: VideoServiceService,
    private sanitizer: DomSanitizer,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getVideoList();
  }

  getVideoList() {
    this._videoService.getVideos().subscribe(
      (results: Video) => {
        this.videoArr = results;
        console.log(this.videoArr);
        this.dataLoading = false;
        this.show = true;
        this.isLoading.emit(this.dataLoading);
      },
      (error: any) => {
        console.error(error);
        if (error.status === 500) {
          this._router.navigate(['/error']);
          this.dataLoading = false;
          this.isLoading.emit(this.dataLoading);
        }
      }
    );
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
