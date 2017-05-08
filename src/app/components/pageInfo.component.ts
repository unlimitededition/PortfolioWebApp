import { Component } from '@angular/core';

@Component({
  selector: 'page-info',
  template: `
  	<h1>This is the {{ page }} Page</h1>
	`,
})

export class PageInfo  { 
	page = 'Info';
}