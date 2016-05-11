import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FooterComponent } from '../Componentes/footer.component';
import { NavBarComponent } from '../Componentes/navbar.component';
@Component({
    selector: 'home-view',
    templateUrl : 'app/Views/home.view.html',
    directives: [NavBarComponent,FooterComponent,ROUTER_DIRECTIVES] 
})

export class HomeView {
    
}