import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var currentPage: string;

@Component({
  selector: 'logo',
  template: `
  	<div id="logoBox" [@movePanel]='state'>
  		<svg id="mmaLogo_01" [@mmaStroke]="state" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 120.2 120.2" style="enable-background:new 0 0 120.2 120.2;" xml:space="preserve">
  			<path d="M120.2,54.7V0H0v120.2h120.2V65.6H10.9V54.7H120.2z M58.4,72.9h10.9v25.5H58.4V72.9z M40.2,72.9h10.9v25.5H40.2V72.9z M22,72.9h10.9v25.5H22V72.9z"/>
  		</svg>
	  </div>
	`,
  styles: [`
  	#logoBox {
  		width: 150px;
  		height: 150px;
  	}
    #mmaLogo_01 path {
    	stroke: red;
    	stroke-width: 2px;
    	stroke-dasharray: 917.8001708984375px;
    }
  `],
  animations: [
  	trigger('movePanel', [

  		state('intro', style({ 'margin-left': '50%', 'padding-top': '100px' })),
  		state('*', style({ 'margin-left': '95%', 'padding-top': '25px', 'height': '4%', 'width': '4%' })),

  		transition('void => intro', [
  			style({ 'margin-left': '50%', transform: 'translateY(-200%)' }),
  			animate('2500ms ease-in-out')
  		]),
  		transition('intro <=> *', animate('750ms ease')),
  	]),
  	trigger('mmaStroke', [

  		state('intro', style({ 'stroke-dashoffset': '-917.8001708984375px', fill: '#ddd', })),
  		state('*', style({ 'stroke-dashoffset': '0px', fill: '#ddd', })),

  		transition('intro <=> *', animate('2000ms ease-in-out')),
  	])
  ]
})

export class Logo  {

  currentPage: string;	
	state: string = currentPage;

  @HostListener('document:click', ['$event'])
    handleClick(e: any) {
        this.state = currentPage;
    }

	inOut() {
    console.log('Move Me!! ' + currentPage);
		console.log('Move Me!! ' + state);
	}

	updatePage(){
		console.log('cPage: ' + currentPage);
	}
}