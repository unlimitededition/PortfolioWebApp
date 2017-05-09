import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var currentPage: string;

@Component({
  selector: 'logo',
  template: `
  	<div id="logoBox" [@movePanel]='state' (click)="inOut()">
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

  		state('main', style({ 'margin-left': '40%', 'padding-top': '100px' })),
  		state('mini', style({ 'margin-left': '95%', 'padding-top': '25px', 'height': '4%', 'width': '4%' })),

  		transition('void => main', [
  			style({ 'margin-left': '40%', transform: 'translateY(-200%)' }),
  			animate('2500ms ease-in-out')
  		]),
  		transition('main <=> mini', animate('750ms ease')),
  	]),
  	trigger('mmaStroke', [

  		state('main', style({ 'stroke-dashoffset': '-917.8001708984375px'; fill: '#ddd'; })),
  		state('mini', style({ 'stroke-dashoffset': '0px'; fill: '#ddd'; })),

  		transition('main <=> mini', animate('2000ms ease-in-out')),
  	])
  ]
})

export class Logo  { 
	
	state: string = 'main';



	inOut() {
		console.log('Move Me!!');
		this.state = (this.state === 'main' ? 'mini' : 'main');
	}

	updatePage(){
		console.log('cPage: ' + currentPage);
	}
}