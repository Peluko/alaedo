import { Component } from '@angular/core';
import { spanishToAlaedo, alaedoToSpanish } from './alaedo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  spanish = '';
  alaedo = '';

  constructor() {
  }


  toSpanish() {
    this.spanish = alaedoToSpanish(this.alaedo);
  }

  toAlaedo() {
    this.alaedo = spanishToAlaedo(this.spanish);
  }
}
