import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes:any;
  searchTerm:string;

  constructor(
    private router: Router,
    private apiService: ApiService,) { }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this.apiService.get('/cadastro_clientes').then(cliente => this.clientes = cliente);
  }

  adicionar() {
    this.router.navigate([`adicionar`]);
  }

  editar(id:number) {
    this.router.navigate([`editar/${id}`]);
  }

  deletar(id:number){
    this.apiService.delete(`/cadastro_clientes/${id}`).then(() => this.listarClientes());

  }

}
