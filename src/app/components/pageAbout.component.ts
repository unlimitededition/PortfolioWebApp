import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  template: `
  	<div>
  	<h1>This is the {{ page }} Page</h1>
  	</div>
	`,
})

export class PageAbout  { 
	page = 'About';
}