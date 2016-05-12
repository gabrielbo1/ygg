import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'nav-bar-component',
    templateUrl : 'app/Componentes/navbar.component.html',
    directives: [ROUTER_DIRECTIVES] 
})

export class NavBarComponent{}