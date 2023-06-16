import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.less'],
})
export class VideoDetailsComponent implements OnInit {
  video: any;
  videoId: string;
  videoList: any;
  isVideoDetailsActive = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.videoId = this._activatedRoute.snapshot.paramMap.get('id');
    this.videoList = JSON.parse(localStorage.getItem('videos'));
    this.video = this.videoList.find((x) => x.media_id == this.videoId);
    console.log('from video details: ' + this.isVideoDetailsActive);
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  handleData(data) {
    console.log('Received data:', data);
    // Handle the data received from the child component
  }
}
