/**
 * Autor: Gabriel Barbosa 
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela acessos 
 * do banco de dados YGG
 * 
*/

import { EntidadeBanco } from './EntidadeBanco';

export class Acessos extends EntidadeBanco{
    
    private acId : number;
    private acSession: string;
    private acUsuario: number;
    private acLogado: boolean;
    private acMomento: Date;
    
   set _acId( acId: number ){
       this.acId = acId;
   }
   
   get _acId(): number {
       return this.acId;
   }
   
   set _acSession( acSession : string ){
       this.acSession = acSession;
   }
   
   get _acSession(): string {
       return this.acSession;
   }
   
   set _acUsuario( acUsuario : number ){
       this.acUsuario = acUsuario;
   }
   
   get _acUsuario(): number {
       return this.acUsuario;
   }
   
   set _acLogado( acLogado : boolean ){
       this.acLogado = acLogado;
   }
   
   get _acLogado() : boolean {
     return this.acLogado;
   }
   
   set _acMomento( acMomento : Date ){
       this.acMomento = acMomento;
   }
   
   get _acMomento() : Date{
       return this.acMomento;
   }
   
}