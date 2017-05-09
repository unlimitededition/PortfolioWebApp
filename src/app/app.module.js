"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var logo_component_1 = require("./components/logo.component");
var pageAbout_component_1 = require("./components/pageAbout.component");
var pageBuild_component_1 = require("./components/pageBuild.component");
var pageFeed_component_1 = require("./components/pageFeed.component");
var pageInfo_component_1 = require("./components/pageInfo.component");
var pageIntro_component_1 = require("./components/pageIntro.component");
var pagePeople_component_1 = require("./components/pagePeople.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [
            pageAbout_component_1.PageAbout,
            pageBuild_component_1.PageBuild,
            pageFeed_component_1.PageFeed,
            pageInfo_component_1.PageInfo,
            pageIntro_component_1.PageIntro,
            pagePeople_component_1.PagePeople,
            logo_component_1.Logo
        ],
        bootstrap: [
            pageAbout_component_1.PageAbout,
            pageBuild_component_1.PageBuild,
            pageFeed_component_1.PageFeed,
            pageInfo_component_1.PageInfo,
            pageIntro_component_1.PageIntro,
            pagePeople_component_1.PagePeople,
            logo_component_1.Logo
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map