import { Component, OnInit } from '@angular/core';

import { FooterComponent } from './../footer/footer.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	AfterLogin: boolean;
	BoforeLogin: boolean;
	constructor() { }


  ngOnInit() {
  	this.AfterLogin = true;
	this.BoforeLogin = false;
    }

}
