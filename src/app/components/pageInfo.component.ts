import { Component } from '@angular/core';

@Component({
  selector: 'page-info',
  template: `
  	<h1>{{ page}} </h1>
	`,
})

export class PageInfo  { 
	page = 'Info';
}