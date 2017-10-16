import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _appC:AppComponent) { }

  ngOnInit() {
  	this._appC.homeClass = 'homepage';
  }

}