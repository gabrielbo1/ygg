"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var navbar_component_1 = require('./Componentes/navbar.component');
var footer_component_1 = require('./Componentes/footer.component');
var home_view_1 = require('./Views/home.view');
var entrar_view_1 = require('./Views/entrar.view');
var cadastrar_view_1 = require('./Views/cadastrar.view');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.component.html",
            directives: [navbar_component_1.NavBarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            // {path: '/home', component: HomeView},
            { path: '/home', component: home_view_1.HomeView },
            { path: '/entrar', component: entrar_view_1.EntrarView },
            { path: '/cadastrar', component: cadastrar_view_1.CadastrarView }
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
