import { Component, Input, OnInit } from '@angular/core';
import { CastEntity } from '../movie-credits';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-connected-movies',
  templateUrl: './connected-movies.component.html',
  styleUrls: ['./connected-movies.component.css']
})
export class ConnectedMoviesComponent implements OnInit {

  @Input() credits!: any;

  myForm!: FormGroup

   
  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(){
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

  creditsCall(){
    let credits: number[] = this.myForm.controls.credits.value
    console.log(credits);
    console.log("Credit call is working")
    
  }

 
}