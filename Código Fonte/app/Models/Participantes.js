/**
 * Autor: Gabriel Barbosa
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela participantes
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
    var Participantes;
    return {
        setters:[
            function (EntidadeBanco_1_1) {
                EntidadeBanco_1 = EntidadeBanco_1_1;
            }],
        execute: function() {
            Participantes = (function (_super) {
                __extends(Participantes, _super);
                function Participantes() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(Participantes.prototype, "_paID", {
                    get: function () {
                        return this.paID;
                    },
                    set: function (paID) {
                        this.paID = paID;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Participantes.prototype, "_paIDUsuario", {
                    get: function () {
                        return this.paIDUsuario;
                    },
                    set: function (paIDUsuario) {
                        this.paIDUsuario = paIDUsuario;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Participantes.prototype, "_paIDGrupoEstudo", {
                    get: function () {
                        return this.paIDGrupoEstudo;
                    },
                    set: function (paIDGrupoEstudo) {
                        this.paIDGrupoEstudo = paIDGrupoEstudo;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Participantes;
            }(EntidadeBanco_1.EntidadeBanco));
            exports_1("Participantes", Participantes);
        }
    }
});
//# sourceMappingURL=Participantes.js.map