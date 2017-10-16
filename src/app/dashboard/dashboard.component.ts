import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText: any;
 currentContractors: any;
 inboxData: Array<any>;
 CompletedContracts: Array<any>;
 isDesc: boolean = false;
 direction: number;
 column: string;
 
  constructor() { }
 
  sort(property){
    
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
   

    /*this.currentContractors.sort(function(a, b){
        if(a[property] < b[property]){  
            return -1 * this.direction;
        }
        else if( a[property] > b[property]){
            return 1 * this.direction;
        }
        else{
            return 0;
        }
    });*/
    /*this.inboxData.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * this.direction;
        }
        else if( a[property] > b[property]){
            return 1 * this.direction;
        }
        else{
            return 0;
        }
    });
     this.CompletedContracts.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * this.direction;
        }
        else if( a[property] > b[property]){
            return 1 * this.direction;
        }
        else{
            return 0;
        }
    });*/
};  

  ngOnInit() {
  	this.currentContractors = [
      { Pname: 'Andrison', Sname: 'Ace heating', StartDate: 'April 20, 2017',  EndDate: 'April 30, 2017', Voilation: 'yes', status:'pending' },
      { Pname: 'Jhon', Sname: 'Deo', StartDate: 'June 5, 2017',  EndDate: 'June 30, 2017', Voilation: 'no', status:'pending' },
      { Pname: 'Mark', Sname: 'Ace', StartDate: 'Feb 10, 2017',  EndDate: 'Feb 20, 2017', Voilation: 'yes', status:'Completed' },
      { Pname: 'David', Sname: 'Deo', StartDate: 'July 18, 2017',  EndDate: 'July 30, 2017', Voilation: 'no', status:'pending' },
      { Pname: 'Cam', Sname: 'Ace heating', StartDate: 'April 20, 2017',  EndDate: 'May 30, 2017', Voilation: 'yes', status:'Completed' }
    ] 

    this.inboxData = [
      { Pname: 'Andrison', Sname: 'Ace heating', date: 'April 20, 2017- 22:00', status:'pending', action:'Send Message' },
      { Pname: 'Jhon', Sname: 'Deo', date: 'April 20, 2017- 22:00', status:'pending', action:'Send Message' },
      { Pname: 'Mark', Sname: 'Ace', date: 'April 20, 2017- 22:00', status:'pending', action:'Send Message' },
      { Pname: 'David', Sname: 'Deo', date: 'April 20, 2017- 22:00', status:'pending', action:'Send Message' },
      { Pname: 'Cam', Sname: 'Ace heating', date: 'April 20, 2017- 22:00', status:'pending', action:'Send Message' }
    ] 
    this.CompletedContracts = [
      { customerName: 'clark1', contractorName: 'Ace heating1', CCDate: 'April 20, 2017', Voilation: 'Last Phase' },
      { customerName: 'clark2', contractorName: 'Ace heating2', CCDate: 'April 20, 2017', Voilation: 'First Phase' },
      { customerName: 'clark3', contractorName: 'Ace heating3', CCDate: 'June 10, 2017', Voilation: 'Last Phase' },
      { customerName: 'clark4', contractorName: 'Ace heating4', CCDate: 'April 20, 2017', Voilation: 'First Phase' },
      { customerName: 'clark3', contractorName: 'Ace heating3', CCDate: 'April 20, 2017', Voilation: 'Last Phase' }
  ]
  }

}
