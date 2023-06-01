import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Video } from '../interface/video.interface';

@Injectable({
  providedIn: 'root',
})
export class VideoServiceService {
  url = 'https://list.ly/api/v4/search/video?q=basketball';

  constructor(private _http: HttpClient) {}

  getVideos() {
    return this._http
      .get<{ results: Video }>(this.url)
      .pipe(map((data) => data.results));
  }
}
