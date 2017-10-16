import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'filterTxt'})

export class FilterText implements PipeTransform {
	
	 transform(categories: any, searchText: any): any {
	    if(searchText === null || searchText === undefined) return categories;



	    return categories.filter(function(category){
	      return category.Pname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
	    })
	  }
}


@Pipe ({ name: 'filter2'})

export class FilterTwo implements PipeTransform {
	
	 transform(categories: any, searchText: any): any {
	    if(searchText === null || searchText === undefined) return categories;



	    return categories.filter(function(category){
	      return category.customerName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
	    })
	  }
}