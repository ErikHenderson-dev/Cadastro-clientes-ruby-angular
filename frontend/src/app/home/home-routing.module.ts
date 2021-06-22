import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormComponent } from './components/form.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adicionar', component: FormComponent },
  { path: 'editar/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
