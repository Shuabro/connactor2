// Make a note of the connecting actor


import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieQueryService } from '../services/movie-query.service';
import { SharedService } from '../services/shared.service';
import { IMovieDetails } from '../movie-details';
import { CastEntity, IMovieCredits } from '../movie-credits';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Subscription for subscribing to shared service to receive movieData
  movieDataSubscription: Subscription | undefined;

  //Variable to hold movie ID sent from shared service, used to make api call to recieve movieDetails
  movieData!: number;

  //Subscription for subscribing to shared service to receive movieDetails
  movieDetailsSubscription: Subscription | undefined;

  //variable that implements interface and hold movie information for selected movie
  movieDetails!: IMovieDetails;

  //Subscription for subscribing to shared service to receive movieCredits
  movieCreditsSubscription: Subscription | undefined;

  //variable that implements interface and hold credit information for selected movie
  movieCredits!: CastEntity[] | null | undefined;

  constructor(private _shared: SharedService, private _movie: MovieQueryService) { }

  ngOnInit(): void {
    //Subscribe to shared service to retreive movie ID
    this.movieDataSubscription = this._shared.movieId$.subscribe(d => {
      this.movieData = d;
    })

    //Subscribe to shared service to retreive movie details
    this.movieDetailsSubscription = this._movie.getMovie(this.movieData).subscribe(m => {
      this.movieDetails = m;

    })

    //Subscribe to shared service to retreive movie credits
    this.movieCreditsSubscription = this._movie.getCredits(this.movieData).subscribe(c => {
      this.movieCredits = c.cast;
      this.displayConnectedMovies(this.movieCredits);
    })

    


  }

  displayConnectedMovies(credits : any) {
    console.log(credits);
    

  };


  ngOnDestory() {
    this.movieDataSubscription?.unsubscribe();
    this.movieCreditsSubscription?.unsubscribe();
  };

}
