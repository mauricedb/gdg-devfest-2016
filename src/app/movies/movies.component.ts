import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  movies: any[];

  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movieService
      .getMovies()
      .subscribe(movies => this.movies = movies);
  }

}
