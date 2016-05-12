/**
 * Autor: Gabriel Barbosa
 * Data de Criação: 10/05/2016
 *
 * Objetivo: Criar interface para padronização de
 * manipulação dos dados do banco de dados.
 * Onde definos todas as operações de crude
 * para o banco de dados alocado no WebService.
 *
 * Subscriber: "Escuta quando determinada Requisição chegar do servidor"
 *
 * Response: "Representa o objeto retornado do servidor"
 *
*/
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GenericDAO;
    return {
        setters:[],
        execute: function() {
            GenericDAO = (function () {
                function GenericDAO(http) {
                    this.http = http;
                }
                Object.defineProperty(GenericDAO.prototype, "_urlSave", {
                    get: function () {
                        return this.urlSave;
                    },
                    set: function (urlSave) {
                        this.urlSave = urlSave;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GenericDAO.prototype, "_urlUpdate", {
                    get: function () {
                        return this.urlUpdate;
                    },
                    set: function (urlUpdate) {
                        this.urlUpdate = urlUpdate;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GenericDAO.prototype, "_urlDelete", {
                    get: function () {
                        return this.urlDelete;
                    },
                    set: function (urlDelete) {
                        this.urlDelete = urlDelete;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GenericDAO.prototype, "_urlFind", {
                    get: function () {
                        return this.urlFind;
                    },
                    set: function (urlFind) {
                        this.urlFind = urlFind;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GenericDAO.prototype, "_urlFindAll", {
                    get: function () {
                        return this.urlFindAll;
                    },
                    set: function (urlFindAll) {
                        this.urlFindAll = urlFindAll;
                    },
                    enumerable: true,
                    configurable: true
                });
                GenericDAO.prototype.save = function (entidade, subscriber) {
                    this.http.post(this._urlSave, JSON.stringify(entidade))
                        .subscribe(subscriber);
                };
                GenericDAO.prototype.update = function (entidade, subscriber) {
                    this.http.post(this._urlUpdate, JSON.stringify(entidade).toString())
                        .subscribe(subscriber);
                };
                GenericDAO.prototype.delete = function (entidade, subscriber) {
                    this.http.get(this.urlDelete + entidade != null ? JSON.stringify(entidade) : "")
                        .subscribe(subscriber);
                };
                GenericDAO.prototype.find = function (entidade, subscriber) {
                    this.http.get(this.urlFind + entidade != null ? JSON.stringify(entidade) : "")
                        .subscribe(subscriber);
                };
                GenericDAO.prototype.findAll = function (entidade, subscriber) {
                    this.http.get(this.urlFind + entidade != null ? JSON.stringify(entidade) : "")
                        .subscribe(subscriber);
                };
                return GenericDAO;
            }());
            exports_1("GenericDAO", GenericDAO);
        }
    }
});
//# sourceMappingURL=GenericDAO.js.map