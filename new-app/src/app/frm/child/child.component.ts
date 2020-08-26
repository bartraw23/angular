import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name: String;
  @Output() changed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sendChange(){
    this.changed.emit(true);
    console.log("Click function works");
  }

}
