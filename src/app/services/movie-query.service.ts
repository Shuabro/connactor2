import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IMovieCredits } from '../movie-credits';
import { IMovieDetails } from '../movie-details';
import { IMovieResults } from '../movie-results';

@Injectable({
  providedIn: 'root'
})
export class MovieQueryService {

  constructor(
    private http: HttpClient) {}


  getData(query : string)
  {
    let url = "https://api.themoviedb.org/3/search/movie?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US&query=" + query + "&page=1&include_adult=false&sort_by=release_date.desc";
    return this.http.get<IMovieResults>(url);
  }

  getMovie(query : number)
  {
    let url = "https://api.themoviedb.org/3/movie/" + query.toString() + "?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US";
    return this.http.get<IMovieDetails>(url);
  }

  getCredits(query : number)
  {
    let url = "https://api.themoviedb.org/3/movie/" + query + "/credits?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US";
    return this.http.get<IMovieCredits>(url);
  }
  
}
