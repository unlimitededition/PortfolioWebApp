import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  template: `
  	<h1>This is the {{ page }} Page</h1>
	`,
})

export class PageAbout  { 
	page = 'About';
}