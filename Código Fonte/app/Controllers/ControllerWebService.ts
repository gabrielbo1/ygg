/**
 * Autor: Gabriel Barbosa.
 * Data de Criação: 10/05/2016
 * Objetivo: Controlador Generico que sera sobreescrito durante 
 * a construção das interface com o usuario, e auxiliara os developers
 * do front-end (html & css ).
*/

import { Subscriber }                   from 'rxjs/Subscriber';
import { Response   }                   from '@angular/http';

export class ControllerWebService extends Subscriber<Response>{
    
    private status : StatusWebService;
    
    next(value: Response): void{
     this.status = JSON.parse(value.json());
     if ( this.status._status.localeCompare("OK") ){
        this.casoSucesso();         
     }else {
        this.casoErro();    
     }

    }
    error(err?: any): void{
        this.casoErroRede();
    }
    complete(): void{
        
    }
    
    casoSucesso(): void {
        
    }
    
    casoErro(): void{
        
    }
    casoErroRede(): void{
        
    }
}

class StatusWebService {
    
    private status : string;
    
    set _status( status : string ){
        this.status = status;
    }
    
    get _status() : string {
        return this.status;
    }
}