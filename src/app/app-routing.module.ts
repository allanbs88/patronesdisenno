import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { TodoComponent } from './todo/todo.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'action', component:ActionComponent},
  {path: 'usuario', component:UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
