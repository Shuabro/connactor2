import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs';
import { MovieResult } from '../movie-result';
import { MovieQueryService } from '../services/movie-query.service';
import { SharedService } from '../services/shared.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit{
  
  @Input() data!: any;
  
  constructor(private shared: SharedService, private movie: MovieQueryService){}

  sendId(details: any) 
  {
    this.shared.sendMovieId(details)
    console.log(details);
    
  }

  

  ngOnInit(): void {
  }
}
