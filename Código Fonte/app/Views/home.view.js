"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var footer_component_1 = require('../Componentes/footer.component');
var navbar_component_1 = require('../Componentes/navbar.component');
var HomeView = (function () {
    function HomeView() {
    }
    HomeView = __decorate([
        core_1.Component({
            selector: 'home-view',
            templateUrl: 'app/Views/home.view.html',
            directives: [navbar_component_1.NavBarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES]
        })
    ], HomeView);
    return HomeView;
}());
exports.HomeView = HomeView;
