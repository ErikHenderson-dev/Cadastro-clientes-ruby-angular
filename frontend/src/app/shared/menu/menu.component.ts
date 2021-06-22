import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html'
})

export class MenuComponent {

  constructor(private router: Router) { }

  redirecionar(rota: any) {
    this.router.navigate([`${rota}`]);
  }
}
