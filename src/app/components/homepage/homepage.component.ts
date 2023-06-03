import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  loading: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onLoading(event: any) {
    this.loading = event;
    console.log();
  }
  console(value: any) {
    console.log(value);
  }
}
