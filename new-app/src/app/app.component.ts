import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  display = true;

  humans = [
    {name: 'Andrzej', age: 55},
    {name: 'Sławek', age: 33}
  ]

  send = function (evt) {
    this.display = !this.display;
  }
}
