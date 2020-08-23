import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HumansService {
  humans = [
    { name: 'Andrzej', age: 55 },
    { name: 'Sławek', age: 33 }
  ];
  constructor() { }

  getAllHumans(){
    return this.humans;
  }
}
