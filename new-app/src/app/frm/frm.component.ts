import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-frm',
  templateUrl: './frm.component.html',
  styleUrls: ['./frm.component.css']
})
export class FrmComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl('')
  })


  received: Boolean = false;

  change(newData: boolean) {
    console.log(newData);
    this.received = newData;
  }

  send() {
    console.log(this.form.value)
  }

  constructor() { }

  ngOnInit(): void {

  }

}
