import { Injectable } from '@angular/core';
import { Http, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies() {
    var headers = new Headers();
    headers.append('Accept', 'application/json');

    return this.http
      // .get('/movies.json')
      .get('https://rawstack.azurewebsites.net/api/movies', { headers })
      .map(rsp => rsp.json());
  }

}
