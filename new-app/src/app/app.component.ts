import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: ['div{ color : blue; }']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'new-app';

  constructor() { }

  ngOnInit() {
    console.log('Component init');
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }

}
