import { Component,NgModule } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp';
  form ={ 
    fname: 'initial fname',
    lname: 'inital lname',
    age: 0,
    password: '',
    lang1: false,
    lang2: false,
    lang3: false

  }
 
   showData(test: any) {
    console.log(test);
    test.form.markAllAsTouched();
    // console.log('lname>>', this.lname);
  }
  updateData() {
    this.form = {
      fname: 'ame',
      lname: 'lname',
      age:  0,
      password: ' ',
      lang1: false,
      lang2: false,
      lang3: false
    }
  }
}
