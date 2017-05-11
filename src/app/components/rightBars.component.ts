import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

declare var currentPage: string;

@Component({
  selector: 'right-bars',
  template: `
  	<div id="rb-top" class="bar">
	  	<svg id="top" viewBox="0 0 1026.208 1025.206">
		  <polygon style="fill:blue" points="1024.706 0.5 1024.706 1025 1.206 0.5 1024.706 0.5"/>
		</svg>
  	</div>

  	<div id="rb-bottom" class="bar">
	  	<svg id="bottom" viewBox="0 0 1025.206 1026.208">
		  <polygon style="fill:lime" points="1025.708 1024.706 1.208 1024.706 1025.708 1.206 1025.708 1024.706"/>
		</svg>
  	</div>
	`,
	styles: [`
	.bar{
		display: inline;
		position:absolute;
	}
		#rb-top {
			width: 65%;
			height: 35%;
			top: 0px;
			right: 0px;
		}
		#rb-bottom {
			width: 35%;
			height: 65%;
			bottom: 0px;
			right: 0px;
		}
	`]
})

export class RightBars  {

}