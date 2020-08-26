import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumansService {

  myObservable$ = new Observable( observer => {
    observer.next();
  });

  humans = [
    { name: 'Andrzej', age: 55 },
    { name: 'Sławek', age: 33 }
  ];
  constructor() { }

  getAllHumans(){
    return this.humans;
  }
}
