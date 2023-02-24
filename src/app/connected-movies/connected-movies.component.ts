import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-connected-movies',
  templateUrl: './connected-movies.component.html',
  styleUrls: ['./connected-movies.component.css']
})
export class ConnectedMoviesComponent {

  @Input() credits!: any;

  constructor() { }


  getChecked(){
    
  }

}
