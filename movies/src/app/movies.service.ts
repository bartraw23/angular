import { Injectable } from '@angular/core';
import { Movie } from './models/movie';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [{
    id: 0,
    title: 'Inception',
    description: 'some desc',
    year: 2010
  },{
    id: 1,
    title: 'Matrix',
    description: 'some desc',
    year: 1999
  },{
    id: 2,
    title: 'Avatar',
    description: 'some desc',
    year: 2009
  }];

  constructor() { }

  getMovies(){
    return this.movies;
  }
}
