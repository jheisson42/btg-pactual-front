import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/list/user-list.component';
import { UserCreateComponent } from './components/user/create/user-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }, // Ruta por defecto
  { path: 'usuarios', component: UserListComponent }, // Ruta para listar usuarios
  { path: 'crear-usuario', component: UserCreateComponent } // Ruta para crear un usuario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
