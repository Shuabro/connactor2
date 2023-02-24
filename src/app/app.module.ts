import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnectedMoviesComponent } from './connected-movies/connected-movies.component';

 
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    DashboardComponent,
    MovieDetailsComponent,
    ConnectedMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
