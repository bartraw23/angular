import { Component, OnInit, OnDestroy } from '@angular/core';
import { HumansService } from 'src/app/humans.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy {
  humans = [];

  cash = 0;

  anotherObservable$ = new Observable( observer => {
    setInterval(()=>observer.next(new Date()), 1000)
  });

  constructor(private humanService: HumansService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.cash = +this.route.snapshot.paramMap.get('cash');
    this.humans = this.humanService.getAllHumans();

    this.humanService.myObservable$.subscribe(() => {
      this.cash += 10;
    })
  }

  ngOnDestroy(): void {
    this.humanService.myObservable$.subscribe().unsubscribe();
  }
  
  back = function (evt) {
    this.location.back();
  }

}
