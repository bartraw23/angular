import { Component, OnInit } from '@angular/core';
import { HumansService } from 'src/app/humans.service'

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  humans = [];

  constructor(private humanService: HumansService) { }

  ngOnInit(): void {
    this.humans = this.humanService.getAllHumans();
  }

}
