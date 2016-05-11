/**
 * Autor: Gabriel Barbosa 
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela participantes 
 * do banco de dados YGG
 * 
*/

import { EntidadeBanco } from './EntidadeBanco';


export class Participantes extends EntidadeBanco{
    
    private paID: number;
    private paIDUsuario: number;
    private paIDGrupoEstudo: number;
    
    set _paID( paID: number ){
        this.paID = paID;
    }
    
    get _paID() : number {
        return this.paID;
    }
    
    set _paIDUsuario( paIDUsuario: number ){
        this.paIDUsuario = paIDUsuario;
    }
    
    get _paIDUsuario() : number {
        return this.paIDUsuario;
    }
    
    set _paIDGrupoEstudo( paIDGrupoEstudo: number ){
        this.paIDGrupoEstudo = paIDGrupoEstudo;
    }
    
    get _paIDGrupoEstudo() : number {
        return this.paIDGrupoEstudo;
    }
}