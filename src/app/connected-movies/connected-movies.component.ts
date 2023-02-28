import { Component, Input, OnInit } from '@angular/core';
import { CastEntity } from '../movie-credits';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ResultsEntity } from '../movie-results';


@Component({
  selector: 'app-connected-movies',
  templateUrl: './connected-movies.component.html',
  styleUrls: ['./connected-movies.component.css']
})
export class ConnectedMoviesComponent implements OnInit {

  @Input() credits!: any;

  myForm!: FormGroup

  connectedMovies!: ResultsEntity[] | null;


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      credits: this.fb.array([])
    });
  }

  onChange(id: string, isChecked: boolean) {
    const creditsFormArray = <FormArray>this.myForm.controls.credits;

    if (isChecked) {
      creditsFormArray.push(new FormControl(id));
    } else {
      let index = creditsFormArray.controls.findIndex(x => x.value == id)
      creditsFormArray.removeAt(index);
    }
  }

  async creditsCall() {
    const credits: number[] = this.myForm.controls.credits.value

    const responses = await Promise.all(
      credits.map(credit => {
        const res  = fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=' + credit + '&with_watch_monetization_types=flatrate'
          ).then(response => response.json())

          ;
       return res} )
         )

    var data = responses.map(response => responses[1].results)

    var connectedMovieData = data.flat();
    
    this.processMovieData(connectedMovieData);
  }


  processMovieData(data: ResultsEntity[]){
    console.log(data);
    
    this.connectedMovies = data.filter((v,i,a)=>a.findIndex(v2=>(JSON.stringify(v) === JSON.stringify(v2)))===i)

    console.log(this.connectedMovies);
    
  }




}