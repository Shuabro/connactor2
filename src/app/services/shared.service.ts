import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public movieId$ = new Subject<number>();

  constructor() {}
  
  sendMovieId(data: number) {
    this.movieId$.next(data);
  }
}
