System.register(['@angular/core', '@angular/router', '../Componentes/navbar.component', '../Componentes/footer.component', '../Services/WebServiceUsuarios', '../Models/Usuarios', '../Controllers/ControllerWebService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, footer_component_1, WebServiceUsuarios_1, Usuarios_1, ControllerWebService_1;
    var EntrarView, ControllerEntrarView;
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
            function (WebServiceUsuarios_1_1) {
                WebServiceUsuarios_1 = WebServiceUsuarios_1_1;
            },
            function (Usuarios_1_1) {
                Usuarios_1 = Usuarios_1_1;
            },
            function (ControllerWebService_1_1) {
                ControllerWebService_1 = ControllerWebService_1_1;
            }],
        execute: function() {
            EntrarView = (function () {
                function EntrarView(webSerivceUsuarios) {
                    this.webSerivceUsuarios = webSerivceUsuarios;
                }
                EntrarView.prototype.ngOnInit = function () {
                    this.usuarios = new Usuarios_1.Usuarios();
                    this.controller = new ControllerEntrarView();
                };
                EntrarView.prototype.login = function () {
                    this.webSerivceUsuarios.login(this.usuarios, this.controller);
                };
                EntrarView = __decorate([
                    core_1.Component({
                        templateUrl: 'app/Views/entrar.view.html',
                        directives: [navbar_component_1.NavBarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [WebServiceUsuarios_1.WebSerivceUsuarios, ControllerWebService_1.ControllerWebService]
                    }), 
                    __metadata('design:paramtypes', [WebServiceUsuarios_1.WebSerivceUsuarios])
                ], EntrarView);
                return EntrarView;
            }());
            exports_1("EntrarView", EntrarView);
            ControllerEntrarView = (function (_super) {
                __extends(ControllerEntrarView, _super);
                function ControllerEntrarView() {
                    _super.apply(this, arguments);
                }
                ControllerEntrarView.prototype.casoSucesso = function () {
                    console.log("Caso sucesso!!");
                };
                ControllerEntrarView.prototype.casoErro = function () {
                    console.log("Caso erro!!");
                    var mensagemErro = this._status;
                };
                ControllerEntrarView.prototype.casoErroRede = function () {
                    console.log("Caso erro rede!!");
                };
                return ControllerEntrarView;
            }(ControllerWebService_1.ControllerWebService));
        }
    }
});
//# sourceMappingURL=entrar.view.js.map