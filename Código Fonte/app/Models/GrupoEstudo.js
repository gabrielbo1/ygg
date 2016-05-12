/**
 * Autor: Gabriel Barbosa
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela grupoEstudo
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
    var GrupoEstudo;
    return {
        setters:[
            function (EntidadeBanco_1_1) {
                EntidadeBanco_1 = EntidadeBanco_1_1;
            }],
        execute: function() {
            GrupoEstudo = (function (_super) {
                __extends(GrupoEstudo, _super);
                function GrupoEstudo() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(GrupoEstudo.prototype, "_geID", {
                    get: function () {
                        return this.geID;
                    },
                    set: function (geID) {
                        this.geID = geID;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GrupoEstudo.prototype, "_geIDDono", {
                    get: function () {
                        return this.geIDDono;
                    },
                    set: function (geIDDono) {
                        this.geIDDono = geIDDono;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GrupoEstudo.prototype, "_geIDArvore", {
                    get: function () {
                        return this.geIDArvore;
                    },
                    set: function (geIDArvore) {
                        this.geIDArvore = geIDArvore;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GrupoEstudo.prototype, "_geMomento", {
                    get: function () {
                        return this.geMomento;
                    },
                    set: function (geMomento) {
                        this.geMomento = geMomento;
                    },
                    enumerable: true,
                    configurable: true
                });
                return GrupoEstudo;
            }(EntidadeBanco_1.EntidadeBanco));
            exports_1("GrupoEstudo", GrupoEstudo);
        }
    }
});
//# sourceMappingURL=GrupoEstudo.js.map