import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovieResults, ResultsEntity } from '../movie-results';
import { MovieQueryService } from '../services/movie-query.service';
import { SharedService } from '../services/shared.service';
import { ReplaySubject  } from 'rxjs';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  {

  @Input() data!: ResultsEntity[] | null | undefined;

  constructor(private shared: SharedService, private movie: MovieQueryService) { }

  sendId(details: any) {
    this.shared.sendMovieId(details)
  }

  
}
