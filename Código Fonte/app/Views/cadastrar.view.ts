import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { NavBarComponent } from '../Componentes/navbar.component';
import { FooterComponent } from '../Componentes/footer.component';

@Component({
    selector: 'cadastrar-view',
    templateUrl : 'app/Views/cadastrar.view.html', 
    directives: [NavBarComponent,FooterComponent, ROUTER_DIRECTIVES] 
})

export class CadastrarView{
    
}