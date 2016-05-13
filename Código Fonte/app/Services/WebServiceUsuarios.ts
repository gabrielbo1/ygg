import { GenericDAO }      from './GenericDAO';
import { Usuarios   }      from './../Models/Usuarios';
import { Injectable }      from '@angular/core';
import {Subscriber}     from 'rxjs/Subscriber';
import {Http, Response} from '@angular/http';

@Injectable()
export class WebSerivceUsuarios extends GenericDAO{
    
    login( usuario: Usuarios, subscriber: Subscriber<Response>){
        this._urlFind = "";
        this.find( usuario, subscriber);
        console.log("Passou por aqui");
    }
    
    logout( usuario: Usuarios, subscriber: Subscriber<Response>){
        this._urlFind = "";
        this.find(usuario, subscriber);
    }
    
}