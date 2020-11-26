import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'parent-childTask';
 master : string="send from parent";
  
 childToParent(name: string){
   this.master=name;
 }
}
