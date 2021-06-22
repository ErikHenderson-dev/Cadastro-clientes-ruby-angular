import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title:string;

  listaProdutos = [
    {idProduto: 1, descricao: "Desenvolvimento de App"},
    {idProduto: 2, descricao: "Desenvolvimento Web"},
    {idProduto: 3, descricao: "Integração com SAP"},
    {idProduto: 4, descricao: "Integração com Mastersaf"},
    {idProduto: 5, descricao: "Suporte Nível Especialista"},
    {idProduto: 6, descricao: "Solução Tributária"}
  ]

  cliente:any;
  submitted = false;

  formulario: FormGroup;
  idCliente = Number(this.route.snapshot.params.id);

  constructor(
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    if(!this.idCliente) {
      this.title = 'Cadastrar cliente';
    } else {
      this.listarCliente(this.idCliente);
      this.title = "Editar cliente";
    }
  }

  initForm() {
    this.formulario = this.formBuilder.group({
      numero: [{value: null, disabled: true}],
      datapedido: [null, Validators.required],
      nome: [null, Validators.required],
      empresa: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.required],
      obs: null,
      produtos: [null, Validators.required]
    });
  }

  listarCliente(id:number) {
    this.apiService.get(`/cadastro_clientes/${id}`).then(data => {
      this.cliente = data,
      this.populateForm(data)
    });
  }

  populateForm(cliente:any) {
    this.form.numero.setValue(cliente.id);
    this.form.datapedido.setValue(cliente.data);
    this.form.nome.setValue(cliente.nome);
    this.form.empresa.setValue(cliente.empresa);
    this.form.telefone.setValue(cliente.tel);
    this.form.email.setValue(cliente.email);
    this.form.obs.setValue(cliente.obs);
    this.form.produtos.setValue(cliente.produtos)

    this.form.datapedido.disable();
  }

  get form():any {
    return this.formulario.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      if (this.idCliente) {
        this.apiService.patch(`cadastro_clientes/${this.idCliente}`, this.formulario.getRawValue())
          .then(() => this.router.navigate([`/`]))
          .catch(error => console.log(error.error));
      } else {
        this.apiService.post('cadastro_clientes', this.formulario.getRawValue())
          .then(() => this.router.navigate([`/`]))
          .catch(error => console.log(error.error));
      }
    }
  }

  cancelar() {
    this.router.navigate(['']);
  }

}
