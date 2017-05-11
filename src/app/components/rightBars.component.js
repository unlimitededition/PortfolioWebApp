"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RightBars = (function () {
    function RightBars() {
    }
    return RightBars;
}());
RightBars = __decorate([
    core_1.Component({
        selector: 'right-bars',
        template: "\n  \t<div id=\"rb-top\" class=\"bar\">\n\t  \t<svg id=\"top\" viewBox=\"0 0 1026.208 1025.206\">\n\t\t  <polygon style=\"fill:blue\" points=\"1024.706 0.5 1024.706 1025 1.206 0.5 1024.706 0.5\"/>\n\t\t</svg>\n  \t</div>\n\n  \t<div id=\"rb-bottom\" class=\"bar\">\n\t  \t<svg id=\"bottom\" viewBox=\"0 0 1025.206 1026.208\">\n\t\t  <polygon style=\"fill:lime\" points=\"1025.708 1024.706 1.208 1024.706 1025.708 1.206 1025.708 1024.706\"/>\n\t\t</svg>\n  \t</div>\n\t",
        styles: ["\n\t.bar{\n\t\tdisplay: inline;\n\t\tposition:absolute;\n\t}\n\t\t#rb-top {\n\t\t\twidth: 65%;\n\t\t\theight: 35%;\n\t\t\ttop: 0px;\n\t\t\tright: 0px;\n\t\t}\n\t\t#rb-bottom {\n\t\t\twidth: 35%;\n\t\t\theight: 65%;\n\t\t\tbottom: 0px;\n\t\t\tright: 0px;\n\t\t}\n\t"]
    })
], RightBars);
exports.RightBars = RightBars;
//# sourceMappingURL=rightBars.component.js.map