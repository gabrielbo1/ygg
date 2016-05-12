/**
 * Autor: Gabriel Barbosa
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela arvore
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
    var Arvore;
    return {
        setters:[
            function (EntidadeBanco_1_1) {
                EntidadeBanco_1 = EntidadeBanco_1_1;
            }],
        execute: function() {
            Arvore = (function (_super) {
                __extends(Arvore, _super);
                function Arvore() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(Arvore.prototype, "_arID", {
                    get: function () {
                        return this.arID;
                    },
                    set: function (arID) {
                        this.arID = arID;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Arvore.prototype, "_arIDUsuario", {
                    get: function () {
                        return this.arIDUsuario;
                    },
                    set: function (arIDUsuario) {
                        this.arIDUsuario = arIDUsuario;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Arvore.prototype, "_arTitulo", {
                    get: function () {
                        return this.arTitulo;
                    },
                    set: function (arTitulo) {
                        this.arTitulo = arTitulo;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Arvore.prototype, "_arDescricao", {
                    get: function () {
                        return this.arDescricao;
                    },
                    set: function (arDescricao) {
                        this.arDescricao = arDescricao;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Arvore.prototype, "_arJSON", {
                    get: function () {
                        return this.arJSON;
                    },
                    set: function (arJSON) {
                        this.arJSON = arJSON;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Arvore.prototype, "_arMomento", {
                    get: function () {
                        return this.arMomento;
                    },
                    set: function (arMomento) {
                        this.arMomento = arMomento;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Arvore;
            }(EntidadeBanco_1.EntidadeBanco));
            exports_1("Arvore", Arvore);
        }
    }
});
//# sourceMappingURL=Arvore.js.map