import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  isVideoDetailsActive = false;
  constructor() {}
}
