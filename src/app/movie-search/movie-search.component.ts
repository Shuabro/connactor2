import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieResults, ResultsEntity } from '../movie-result';
import { MovieQueryService } from '../services/movie-query.service';
import { map } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  movies!: ResultsEntity[] | null | undefined;


  constructor(private queryService: MovieQueryService) {}

  search(query: string) {
    //this.movies.splice(0, this.movies.length);
    this.queryService.getData(query).subscribe((d: IMovieResults) => {      
      this.processResults(d.results);
    })
  }

  processResults(movieResults: ResultsEntity[] | null | undefined) {
    
    this.movies = movieResults


    // movies.forEach((element: any) => {
    //    this.movies.push([element.title, element.id, element.overview, element.poster_path])
    // });
  }


  ngOnInIt(): void {}
}
