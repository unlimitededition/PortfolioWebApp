import { Component } from '@angular/core';

@Component({
  selector: 'page-intro',
  template: `
  	<h1>This is the {{ page }} Page</h1>
	`,
})

export class PageIntro  { 
	page = 'Intro';
}