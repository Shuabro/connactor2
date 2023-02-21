import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieResult } from '../movie-result';
import { SharedService } from '../services/shared.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit{
  
  @Input() data!: any;
  @Output() movieId: EventEmitter<any> = new EventEmitter();
  constructor(protected shared: SharedService){

  }

  sendId(details: any)
  {
    this.movieId.emit(details);
  }
  message: string = '';
  

  ngOnInit(): void {
   
  }
}
