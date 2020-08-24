import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  title = 'new-app';
  display = true;

  dateSome = new Date(1984, 1, 2);

  cash = 2.55;

  constructor() { }

  ngOnInit(): void {
  }

  send = function (evt) {
    this.display = !this.display;
  }

}
