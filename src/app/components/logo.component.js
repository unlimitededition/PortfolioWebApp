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
        this.state = 'inactive';
    }
    Logo.prototype.inOut = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    return Logo;
}());
Logo = __decorate([
    core_1.Component({
        selector: 'logo',
        template: "\n  \t<div id=\"logoBox\" [@movePanel]='state'>\n  \t<img id=\"lb_image\" src=\"./img/unnamed.png\" alt=\"Main Logo\">\n  \t</div>\n\t",
        styles: ["\n  \t#logoBox { height: 200px; width: 200px; margin: 0 auto;}\n  "],
        animations: [
            animations_1.trigger('movePanel', [
                animations_1.transition('void => *', [
                    animations_1.style({ transform: 'translateY(-150%)' }),
                    animations_1.animate(500)
                ]),
            ])
        ]
    })
], Logo);
exports.Logo = Logo;
//# sourceMappingURL=logo.component.js.map