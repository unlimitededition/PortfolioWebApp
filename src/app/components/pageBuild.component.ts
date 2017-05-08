import { Component } from '@angular/core';

@Component({
  selector: 'page-build',
  template: `
  	<h1>This is the {{ page }} Page</h1>
	`,
})

export class PageBuild  { 
	page = 'Build';
}