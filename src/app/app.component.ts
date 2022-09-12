import { Component,NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp';
  form ={ 
    fname: 'initial fname',
    lname: 'inital lname'
  }

  showData() {
    console.log('form>>', this.form);
    // console.log('lname>>', this.lname);
  }
  updateData() {
    this.form = {
      fname: 'fname',
      lname: 'lname'
    }
  }
}
