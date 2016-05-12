/**
 * Autor: Gabriel Barbosa
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela usuarios
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
    var Usuarios, redeSocial;
    return {
        setters:[
            function (EntidadeBanco_1_1) {
                EntidadeBanco_1 = EntidadeBanco_1_1;
            }],
        execute: function() {
            Usuarios = (function (_super) {
                __extends(Usuarios, _super);
                function Usuarios() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(Usuarios.prototype, "_usID", {
                    get: function () {
                        return this.usID;
                    },
                    set: function (usID) {
                        this.usID = usID;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Usuarios.prototype, "_usNome", {
                    get: function () {
                        return this.usNome;
                    },
                    set: function (usNome) {
                        this.usNome = usNome;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Usuarios.prototype, "_usSenha", {
                    get: function () {
                        return this.usSenha;
                    },
                    set: function (usSenha) {
                        this.usSenha = usSenha;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Usuarios.prototype, "_usIDRedeSocial", {
                    get: function () {
                        return this.usIDRedeSocial;
                    },
                    set: function (usIDRedeSocial) {
                        this.usIDRedeSocial = usIDRedeSocial;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Usuarios.prototype, "_usRedeSocial", {
                    get: function () {
                        return this.usRedeSocial;
                    },
                    set: function (usRedeSocial) {
                        this.usRedeSocial = usRedeSocial;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Usuarios.prototype, "_usMomento", {
                    get: function () {
                        return this.usMomento;
                    },
                    set: function (usMomento) {
                        this.usMomento = usMomento;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Usuarios;
            }(EntidadeBanco_1.EntidadeBanco));
            exports_1("Usuarios", Usuarios);
            (function (redeSocial) {
                redeSocial[redeSocial["Google"] = 0] = "Google";
                redeSocial[redeSocial["Facebook"] = 1] = "Facebook";
                redeSocial[redeSocial["YGG"] = 2] = "YGG";
            })(redeSocial || (redeSocial = {}));
        }
    }
});
//# sourceMappingURL=Usuarios.js.map