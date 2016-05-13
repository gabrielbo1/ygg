/**
 * Autor: Gabriel Barbosa.
 * Data de Criação: 10/05/2016
 * Objetivo: Controlador Generico que sera sobreescrito durante
 * a construção das interface com o usuario, e auxiliara os developers
 * do front-end (html & css ).
*/
System.register(['rxjs/Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var ControllerWebService, StatusWebService;
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            ControllerWebService = (function (_super) {
                __extends(ControllerWebService, _super);
                function ControllerWebService() {
                    _super.apply(this, arguments);
                }
                ControllerWebService.prototype.next = function (value) {
                    this.status = JSON.parse(value.json());
                    if (this.status._status.localeCompare("OK")) {
                        this.casoSucesso();
                    }
                    else {
                        this.casoErro();
                    }
                };
                ControllerWebService.prototype.error = function (err) {
                    this.casoErroRede();
                };
                ControllerWebService.prototype.complete = function () {
                };
                ControllerWebService.prototype.casoSucesso = function () {
                };
                ControllerWebService.prototype.casoErro = function () {
                };
                ControllerWebService.prototype.casoErroRede = function () {
                };
                Object.defineProperty(ControllerWebService.prototype, "_status", {
                    get: function () {
                        return this.status;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ControllerWebService;
            }(Subscriber_1.Subscriber));
            exports_1("ControllerWebService", ControllerWebService);
            StatusWebService = (function () {
                function StatusWebService() {
                }
                Object.defineProperty(StatusWebService.prototype, "_status", {
                    get: function () {
                        return this.status;
                    },
                    set: function (status) {
                        this.status = status;
                    },
                    enumerable: true,
                    configurable: true
                });
                return StatusWebService;
            }());
        }
    }
});
//# sourceMappingURL=ControllerWebService.js.map