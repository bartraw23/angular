import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private mS: MoviesService) { }

  ngOnInit(): void {
    this.movies = this.mS.getMovies();
    console.table(this.movies);
  }

}
