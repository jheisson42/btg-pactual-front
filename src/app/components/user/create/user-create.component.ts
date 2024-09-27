import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {

  usuario = {
    nombre: '',
    saldo: 0,
    email: '',
    telefono: ''
  };

  constructor(private usuarioService: UserService) { }

  registrarUsuario(): void {
    this.usuarioService.registrarUsuario(this.usuario).subscribe(response => {
      console.log('Usuario registrado con éxito', response);
    }, error => {
      console.error('Error registrando usuario', error);
    });
  }
}
