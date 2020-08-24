import { Component, OnInit } from '@angular/core';
import { HumansService } from 'src/app/humans.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  humans = [];

  cash = 0;

  constructor(private humanService: HumansService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.cash = +this.route.snapshot.paramMap.get('cash');
    this.humans = this.humanService.getAllHumans();
  }

  back = function (evt) {
    this.location.back();
  }

}
