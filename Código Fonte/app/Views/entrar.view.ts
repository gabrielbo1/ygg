import { Component,OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavBarComponent } from '../Componentes/navbar.component';
import { FooterComponent } from '../Componentes/footer.component';
import { WebSerivceUsuarios } from '../Services/WebServiceUsuarios';
import { Usuarios } from '../Models/Usuarios';
import { ControllerWebService }  from '../Controllers/ControllerWebService';
import { NgForm } from '@angular/common';

@Component({
    templateUrl : 'app/Views/entrar.view.html', 
    directives: [NavBarComponent, FooterComponent,ROUTER_DIRECTIVES],
    providers: [WebSerivceUsuarios, ControllerWebService]
})

export class EntrarView implements OnInit{
    usuarios : Usuarios;
    constructor ( private webSerivceUsuarios : WebSerivceUsuarios){}
    controller : ControllerEntrarView;  
                  
    ngOnInit (){
        this.usuarios = new Usuarios();
        this.controller = new ControllerEntrarView();
    }
    
    login(){
        this.webSerivceUsuarios.login(this.usuarios, this.controller);
    } 
                 
}

class ControllerEntrarView extends ControllerWebService{
    
    
    casoSucesso(){
        console.log("Caso sucesso!!");
    }
    
    casoErro(){
        console.log("Caso erro!!");
        let mensagemErro = this._status;
    }
    
    casoErroRede(){
        console.log("Caso erro rede!!");
    }
}