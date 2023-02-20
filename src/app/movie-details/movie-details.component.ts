import { Component, Input, OnInit } from '@angular/core';
import { MovieResult } from '../movie-result';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit{
  
  @Input() data!: any;
  constructor(protected  shared: SharedService){

  }

  message: string = '';

  ngOnInit(): void {
   
  }
}
