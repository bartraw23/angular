import { Component, OnInit, OnDestroy } from '@angular/core';
import { HumansService } from './humans.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: ['div{ color : blue; }']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'new-app';
  display = true;

  humans = [];

  dateSome = new Date(1984,1,2);

  cash = 2.55;

  constructor(private humanService: HumansService) { }

  ngOnInit() {
    console.log('Component init');
    this.humans = this.humanService.getAllHumans();
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }

  send = function (evt) {
    this.display = !this.display;
  }
}
