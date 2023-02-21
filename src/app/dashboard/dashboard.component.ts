import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movieDataSubscription: Subscription | undefined;
  movieData!: number;
  constructor(private _shared: SharedService) {

  }


  ngOnInit(): void {
    this.movieDataSubscription = this._shared.movieId$.subscribe(d => {
      console.log(d);
    
    this.movieData = d;})

  }

  ngOnDestory() {
    this.movieDataSubscription?.unsubscribe();
  }






}
