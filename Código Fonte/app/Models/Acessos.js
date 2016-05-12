/**
 * Autor: Gabriel Barbosa
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela acessos
 * do banco de dados YGG
 *
*/
System.register(['./EntidadeBanco'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var EntidadeBanco_1;
    var Acessos;
    return {
        setters:[
            function (EntidadeBanco_1_1) {
                EntidadeBanco_1 = EntidadeBanco_1_1;
            }],
        execute: function() {
            Acessos = (function (_super) {
                __extends(Acessos, _super);
                function Acessos() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(Acessos.prototype, "_acId", {
                    get: function () {
                        return this.acId;
                    },
                    set: function (acId) {
                        this.acId = acId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Acessos.prototype, "_acSession", {
                    get: function () {
                        return this.acSession;
                    },
                    set: function (acSession) {
                        this.acSession = acSession;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Acessos.prototype, "_acUsuario", {
                    get: function () {
                        return this.acUsuario;
                    },
                    set: function (acUsuario) {
                        this.acUsuario = acUsuario;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Acessos.prototype, "_acLogado", {
                    get: function () {
                        return this.acLogado;
                    },
                    set: function (acLogado) {
                        this.acLogado = acLogado;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Acessos.prototype, "_acMomento", {
                    get: function () {
                        return this.acMomento;
                    },
                    set: function (acMomento) {
                        this.acMomento = acMomento;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Acessos;
            }(EntidadeBanco_1.EntidadeBanco));
            exports_1("Acessos", Acessos);
        }
    }
});
//# sourceMappingURL=Acessos.js.map