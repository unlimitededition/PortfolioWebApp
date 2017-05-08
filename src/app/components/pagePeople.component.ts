import { Component } from '@angular/core';

@Component({
  selector: 'page-people',
  template: `
  	<h1>This is the {{ page }} Page</h1>
	`,
})

export class PagePeople  { 
	page = 'People';
}