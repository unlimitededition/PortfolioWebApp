import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'logo',
  template: `
  	<div id="logoBox" [@movePanel]='state'>
  	<img id="lb_image" src="./img/unnamed.png" alt="Main Logo">
  	</div>
	`,
  styles: [`
  	#logoBox { height: 200px; width: 200px; margin: 0 auto;}
  `],
  animations: [
  	trigger('movePanel', [
  		transition('void => *', [
  			style({ transform: 'translateY(-150%)' }),
  			animate(500)
  		]),
  	])
  ]
})

export class Logo  { 
	
	state: string = 'inactive';

	inOut() {
		this.state = (this.state === 'inactive' ? 'active' : 'inactive');
	}
}