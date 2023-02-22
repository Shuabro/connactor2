import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieQueryService } from '../services/movie-query.service';
import { SharedService } from '../services/shared.service';
import { IMovieDetails } from '../movie-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Subscription for subscribing to shared service to receive movieDetails
  movieDataSubscription: Subscription | undefined;

  //Variable to hold movie ID sent from shared service, used to make api call to recieve movieDetails
  movieData!: number;

  //variable that implements interface and hold movie information for selected movie
  movieDetails!: IMovieDetails;

  constructor(private _shared: SharedService, private _movie: MovieQueryService) { }

  ngOnInit(): void {
    //Subscribe to shared service to retreive movie details
    this.movieDataSubscription = this._shared.movieId$.subscribe(d => {
      this.movieData = d;
      this.getMovieDetails(d);
    })
  }

  ngOnDestory() {
    this.movieDataSubscription?.unsubscribe();
  }

  getMovieDetails(data: number) {
    this._movie.getMovie(data).subscribe(d => {
      this.movieDetails = d;
      console.log(this.movieDetails);
      console.log(this.movieDetails.title);
      
    })
  }
}
