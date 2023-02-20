import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResult } from '../movie-result';
import { MovieQueryService } from '../services/movie-query.service';
import { map } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-movie-search',
  providers: [SharedService],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  movies: any = [];
  

  constructor(private queryService: MovieQueryService, private shared: SharedService){
    
  }

  search(query: string)
  {
    this.movies.splice(0, this.movies.length);
    this.queryService.getData(query).subscribe((movies:any) => {
      this.processResults(movies.results) })
  }

  processResults(movies: any)
  {

  
    movies.forEach((element: any) => {
      this.movies.push([element.title, element.id])
      }
      );
      console.log(this.movies)
 
  }
  

  ngOnInIt() : void
  {

  }
}
