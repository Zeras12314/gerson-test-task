import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  videoArr: any;
  constructor(private _sharedService: SharedServiceService) {}
  enteredSearchValue: string = '';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() isActive;

  ngOnInit(): void {}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
