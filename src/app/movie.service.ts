import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies() {
    return this.http
      // .get('/movies.json')
      .get('https://rawstack.azurewebsites.net/api/movies')
      .map(rsp => rsp.json());
  }
}
