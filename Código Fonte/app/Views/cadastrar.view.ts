import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavBarComponent } from '../Componentes/navbar.component';
import { FooterComponent } from '../Componentes/footer.component';

@Component({
    selector: 'cadastrar-view',
    templateUrl : 'app/Views/cadastrar.view.html', 
    directives: [NavBarComponent,FooterComponent, ROUTER_DIRECTIVES] 
})

export class CadastrarView{
    
}