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

import {EntidadeBanco} from '../model/EntidadeBanco';
import {Subscriber}     from 'rxjs/Subscriber';
import {Http, Response} from 'angular2/http';


export class GenericDAO {
    
    constructor( private http: Http){
        
    }
    
    private urlSave    : string;
    private urlUpdate  : string;
    private urlDelete  : string;
    private urlFind    : string;
    private urlFindAll : string;  
    
    set _urlSave( urlSave : string ){
        this.urlSave = urlSave;
    }
    
    get _urlSave() : string {
        return this.urlSave;
    }
    
    set _urlUpdate( urlUpdate : string ){
        this.urlUpdate = urlUpdate;
    }
    
    get _urlUpdate() : string {
        return this.urlUpdate;
    }
    
    set _urlDelete( urlDelete : string ){
        this.urlDelete = urlDelete;
    }
    
    get _urlDelete() : string {
        return this.urlDelete;
    }
    
    set _urlFind( urlFind : string ){
        this.urlFind = urlFind;
    }
    
    get _urlFind() : string {
        return this.urlFind;
    }
    
    set _urlFindAll( urlFindAll : string ){
        this.urlFindAll = urlFindAll;
    }
    
    get _urlFindAll() : string {
        return this.urlFindAll;
    }
    
    save    ( entidade: EntidadeBanco, subscriber: Subscriber<Response> ){
        this.http.post( this._urlSave, JSON.stringify(entidade))
            .subscribe( subscriber );
    } 
    
    update  ( entidade: EntidadeBanco, subscriber: Subscriber<Response> ){ 
        this.http.post( this._urlUpdate, JSON.stringify( entidade ).toString())
            .subscribe( subscriber );
    }
    
    delete  ( entidade: EntidadeBanco, subscriber: Subscriber<Response> ){ 
        this.http.get( this.urlDelete + entidade != null ? JSON.stringify(entidade) : "" )
            .subscribe(subscriber);
    }
    
    find    ( entidade: EntidadeBanco, subscriber: Subscriber<Response> ){ 
        this.http.get( this.urlFind  + entidade != null ? JSON.stringify(entidade) : "" )
            .subscribe(subscriber);
    }
    
    findAll ( entidade: EntidadeBanco, subscriber: Subscriber<Response> ){ 
        this.http.get( this.urlFind  + entidade != null ? JSON.stringify(entidade) : "" )
            .subscribe(subscriber);
    }
}