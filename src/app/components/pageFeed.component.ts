import { Component } from '@angular/core';

@Component({
  selector: 'page-feed',
  template: `
  	<h1>This is the {{ page }} Page</h1>
	`,
})

export class PageFeed  { 
	page = 'Feed';
}