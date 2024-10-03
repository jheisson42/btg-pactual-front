import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private usuarioService: UserService,
    public snackBar: MatSnackBar,
    private router: Router ) { }

  registrarUsuario(): void {
    this.usuarioService.registrarUsuario(this.usuario).subscribe(response => {
      console.log('Usuario registrado con éxito', response);
          // Mostrar mensaje de éxito
          this.snackBar.open('Suscripción con éxito', 'Cerrar', {
            duration: 1500, // Duración en milisegundos
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
    
          this.clearForm();
          // Recargar la página después de 3 segundos
          setTimeout(() => {
            this.router.navigate(['/usuarios']);
          }, 800);
    }, error => {
      console.error('Error registrando usuario', error);
      let err = error.error.message;
      console.error('Error---->', err);
      // Mostrar mensaje de error
      this.snackBar.open('Error: ' + err, 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      this.clearForm();
    });
  }

  cancel(): void{
    this.router.navigate(['/usuarios']);

  }

  clearForm(): void {
    this.usuario = {
      nombre: '',
      saldo: 0,
      email: '',
      telefono: ''
    };
  }
}
