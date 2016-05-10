/**
 * Autor: Gabriel Barbosa 
 * Data de Criação: 10/05/2016
 * Objetivo: Mapear tabela usuarios 
 * do banco de dados YGG
 * 
*/

import { EntidadeBanco } from './EntidadeBanco';


export class Usuarios extends EntidadeBanco{
    
   private usID: number;
   private usNome: string;
   private usSenha: string;
   private usIDRedeSocial: number;
   private usRedeSocial: redeSocial;
   private usMomento: Date;
  
   set _usID( usID: number ){
        this.usID = usID;
    }
    
    get _usID() : number {
        return this.usID;
    }
    
    set _usNome( usNome: string ){
        this.usNome = usNome;
    }
    
    get _usNome() : string {
        return this.usNome;
    }
    
    set _usSenha( usSenha: string ){
        this.usSenha = usSenha;
    }
    
    get _usSenha() : string {
        return this.usSenha;
    }
    
    set _usIDRedeSocial( usIDRedeSocial: number ){
        this.usIDRedeSocial = usIDRedeSocial;
    }
    
    get _usIDRedeSocial() : number {
        return this.usIDRedeSocial;
    }
    
    set _usRedeSocial( usRedeSocial: redeSocial ){
        this.usRedeSocial = usRedeSocial;
    }
    
    get _usRedeSocial() : redeSocial {
        return this.usRedeSocial;
    }
 
    set _usMomento( usMomento: Date ){
        this.usMomento = usMomento;
    }
    
    get _usMomento() : Date {
        return this.usMomento;
    }
   
}

enum redeSocial{
    Google, 
    Facebook,
    YGG
}
