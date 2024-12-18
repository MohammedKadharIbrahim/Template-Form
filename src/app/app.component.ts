import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app2';

  @ViewChild('userForm') uf! : NgForm;

  countryList=[
    {"countryname":"INDIA"},
    {"countryname":"USA"},
    {"countryname":"ENGLAND"}
  ];


  SetDefaultValue(){
    this.uf.setValue({
      firstname:'saravana',
      lastname:'kumar',
      email:"saravana@gamil.com",
      gender:'male',
      isMarried:false,
      address:{
        country:'USA',
        city:'long island',
        street:'127,wall street',
        pincode:"627 683"
      }
    })

    // this.uf.form.patchValue({
    //   firstname:'apsal'
    // })


  }

 

  // onSubmit(myForm:NgForm){
  //   console.log(myForm)
  // }
  onSubmit() {
    if (this.uf.valid) {
      console.log(this.uf.value);
      this.uf.reset();
    }
  }

}
