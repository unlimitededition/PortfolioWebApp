"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var Logo = (function () {
    function Logo() {
        this.state = 'main';
    }
    Logo.prototype.inOut = function () {
        console.log('Move Me!!');
        this.state = (this.state === 'main' ? 'mini' : 'main');
    };
    Logo.prototype.updatePage = function () {
        console.log('cPage: ' + currentPage);
    };
    return Logo;
}());
Logo = __decorate([
    core_1.Component({
        selector: 'logo',
        template: "\n  \t<div id=\"logoBox\" [@movePanel]='state' (click)=\"inOut()\">\n\t\t<svg id=\"mmaLogo_01\" [@mmaStroke]=\"state\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"viewBox=\"0 0 120.2 120.2\" style=\"enable-background:new 0 0 120.2 120.2;\" xml:space=\"preserve\">\n\t\t\t<path d=\"M120.2,54.7V0H0v120.2h120.2V65.6H10.9V54.7H120.2z M58.4,72.9h10.9v25.5H58.4V72.9z M40.2,72.9h10.9v25.5H40.2V72.9z M22,72.9h10.9v25.5H22V72.9z\"/>\n\t\t</svg>\n\t</div>\n\t",
        styles: ["\n  \t#logoBox {\n  \t\twidth: 150px;\n  \t\theight: 150px;\n  \t}\n    #mmaLogo_01 path {\n    \tstroke: red;\n    \tstroke-width: 2px;\n    \tstroke-dasharray: 917.8001708984375px;\n    }\n  "],
        animations: [
            animations_1.trigger('movePanel', [
                animations_1.state('main', animations_1.style({ 'margin-left': '40%', 'padding-top': '100px' })),
                animations_1.state('mini', animations_1.style({ 'margin-left': '95%', 'padding-top': '25px', 'height': '4%', 'width': '4%' })),
                animations_1.transition('void => main', [
                    animations_1.style({ 'margin-left': '40%', transform: 'translateY(-200%)' }),
                    animations_1.animate('2500ms ease-in-out')
                ]),
                animations_1.transition('main <=> mini', animations_1.animate('750ms ease')),
            ]),
            animations_1.trigger('mmaStroke', [
                animations_1.state('main', animations_1.style({ 'stroke-dashoffset': '-917.8001708984375px', fill: '#ddd' })),
                animations_1.state('mini', animations_1.style({ 'stroke-dashoffset': '0px', fill: '#ddd' })),
                animations_1.transition('main <=> mini', animations_1.animate('2000ms ease-in-out')),
            ])
        ]
    })
], Logo);
exports.Logo = Logo;
//# sourceMappingURL=logo.component.js.map