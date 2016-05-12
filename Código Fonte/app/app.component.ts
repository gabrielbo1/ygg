import { Component, OnInit } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { NavBarComponent } from './Componentes/navbar.component';
import { FooterComponent } from './Componentes/footer.component';  

import { HomeView } from './Views/home.view';
import { EntrarView } from './Views/entrar.view';
import { CadastrarView } from './Views/cadastrar.view';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  directives: [NavBarComponent, FooterComponent, ROUTER_DIRECTIVES],
})
@RouteConfig(([
  // {path: '/home', component: HomeView},
  {path: '/home', component: HomeView},
  {path: '/entrar', component: EntrarView},
  {path: '/cadastrar', component: CadastrarView}
  // {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
])
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
