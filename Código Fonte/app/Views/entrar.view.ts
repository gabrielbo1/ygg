import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavBarComponent } from '../Componentes/navbar.component';
import { FooterComponent } from '../Componentes/footer.component';

@Component({
    templateUrl : 'app/Views/entrar.view.html', 
    directives: [NavBarComponent, FooterComponent,ROUTER_DIRECTIVES]
})

export class EntrarView{
    
}