/**
 * Autor: Gabriel Barbosa 
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela grupoEstudo 
 * do banco de dados YGG
 * 
*/

import { EntidadeBanco } from './EntidadeBanco';

export class GrupoEstudo extends EntidadeBanco{
    
    private geID: number;
    private geIDDono: number;
    private geIDArvore: number;
    private geMomento: Date;
    
   set _geID( geID: number ){
        this.geID = geID;
    }
    
    get _geID() : number {
        return this.geID;
    }
    
    set _geIDDono( geIDDono: number ){
        this.geIDDono = geIDDono;
    }
    
    get _geIDDono() : number {
        return this.geIDDono;
    }
    
    set _geIDArvore( geIDArvore: number ){
        this.geIDArvore = geIDArvore;
    }
    
    get _geIDArvore() : number {
        return this.geIDArvore;
    }
    
    set _geMomento( geMomento: Date ){
        this.geMomento = geMomento;
    }
    
    get _geMomento() : Date {
        return this.geMomento;
    }
}