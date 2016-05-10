/**
 * Autor: Gabriel Barbosa 
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela arvore 
 * do banco de dados YGG
 * 
*/

import { EntidadeBanco } from './EntidadeBanco';

export class Arvore extends EntidadeBanco{
    
    private arID: number;
    private arIDUsuario: number;
    private arTitulo: number;
    private arDescricao: string;
    private arJSON: string;
    private arMomento: Date;
    
    set _arID( arID: number ){
        this.arID = arID;
    }
    
    get _arID() : number {
        return this.arID;
    }
   
    set _arIDUsuario( arIDUsuario: number ){
        this.arIDUsuario = arIDUsuario;
    }
    
    get _arIDUsuario() : number {
        return this.arIDUsuario;
    }
    
    set _arTitulo( arTitulo: number ){
        this.arTitulo = arTitulo;
    }
    
    get _arTitulo() : number {
        return this.arTitulo;
    }
    
    set _arDescricao( arDescricao: string ){
        this.arDescricao = arDescricao;
    }
    
    get _arDescricao() : string {
        return this.arDescricao;
    }
    
    set _arJSON( arJSON: string ){
        this.arJSON = arJSON;
    }
    
    get _arJSON() : string {
        return this.arJSON;
    }
    
    set _arMomento( arMomento: Date ){
        this.arMomento = arMomento;
    }
    
    get _arMomento() : Date {
        return this.arMomento;
    }
}