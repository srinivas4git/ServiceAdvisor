import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './../header/header.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor (private _router: Router) { }

list = [];

 serviceType: any;

  logIn(user: any) {
    
  	if(user.u_name == 'admin' && user.pwd == 'welcome' ){ 

      window.location.reload();
  		this._router.navigate(['/dashboard']);
      
    
  	}
  }

  ngOnInit() {
     this.list.push({ name: '', password: '' });
    this.list.push({ name: '', password: '' });
    this.list.push({ name: '', password: '' });

    //this.serviceType = true;

  }
   addnew() {
    const value = { name: '', password: '' };
    this.list.push(value);
  }
  remove(i) {
    this.list.splice(i, 1);
  }
  /* hide service page items */

 

}
