import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';
import { IMovieResults, ResultsEntity } from '../movie-results';
import { MovieQueryService } from '../services/movie-query.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies!: ResultsEntity[] | null | undefined;

  searchDataSubscription:  Subscription | undefined;

  lastSearch:string = '';

  constructor(private queryService: MovieQueryService) {}
  ngOnInit(): void {
   

  }

  search(query: string) {
    
    this.searchDataSubscription = this.queryService.getData(query).subscribe((d: IMovieResults) => {      
      this.movies = d.results;
     
    })
  }

  ngOnDestroy(){
    this.searchDataSubscription?.unsubscribe();
  }

}
