System.register(['@angular/core', '@angular/router', './Componentes/navbar.component', './Componentes/footer.component', './Views/home.view', './Views/entrar.view', './Views/cadastrar.view'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, footer_component_1, home_view_1, entrar_view_1, cadastrar_view_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (home_view_1_1) {
                home_view_1 = home_view_1_1;
            },
            function (entrar_view_1_1) {
                entrar_view_1 = entrar_view_1_1;
            },
            function (cadastrar_view_1_1) {
                cadastrar_view_1 = cadastrar_view_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
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
                        directives: [navbar_component_1.NavBarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.Routes([
                        // {path: '/home', component: HomeView},
                        { path: '/home', component: home_view_1.HomeView },
                        { path: '/entrar', component: entrar_view_1.EntrarView },
                        { path: '/cadastrar', component: cadastrar_view_1.CadastrarView }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map