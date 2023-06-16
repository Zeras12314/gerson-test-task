import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  loading: boolean = true;
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}

  onLoading(event: any) {
    this.loading = event;
    console.log();
  }
  console(value: any) {
    console.log(value);
  }
  onSearchTextEntered(searchValue) {
    this.searchText = searchValue;
  }
}
