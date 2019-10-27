import { Component } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  environment = '';
  authorized: any;
  constructor() {
    
  }

  ngOnInit() {

  }
  
}