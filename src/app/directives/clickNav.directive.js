//https://christianliebel.com/2016/05/angular-2-a-simple-click-outside-directive/
// import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
// @Directive({
//     selector: '[clickNav]'
// })
// export class ClickNav {
//     constructor(private _elementRef : ElementRef) {
//     }
//     @Output()
//     public clickNav = new EventEmitter();
//     @HostListener('document:click', ['$event.target'])
//     public onClick(targetElement) {
//         if (!clickedInside) {
//             this.clickNav.emit(true);
//         }
//     }
// } 
//# sourceMappingURL=clickNav.directive.js.map