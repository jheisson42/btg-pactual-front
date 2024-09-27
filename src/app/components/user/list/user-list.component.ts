import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'; 
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from '../../../user-modal/user-modal.component';
import { FundsService } from '../../../services/funds.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  usuarios: any[] = [];
  displayedColumns: string[] = ['nombre', 'email', 'telefono', 'saldo', 'acciones'];
 
  expandedHistoryElement: any | null = null;
  expandedSubscribeElement: any | null = null;

  constructor(private userService: UserService, 
    public fundsService: FundsService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(data => {
      console.log('data: ', data);
      
      this.usuarios = data;
    });
  }

  openUserModal(usuario: any): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '400px',
      data: { usuario: usuario }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
      // realizar alguna acción después de cerrar el modal si es necesario
    });
  }

  toggleHistory(element: any): void {
    // Alternar expansión de la fila para historial
    this.expandedHistoryElement = this.expandedHistoryElement === element ? null : element;
    // Asegurar que subscripciones esté oculto
    this.expandedSubscribeElement = null;
  }

  toggleSubscribe(element: any): void {
    // Alternar expansión de la fila para subscripciones
    this.expandedSubscribeElement = this.expandedSubscribeElement === element ? null : element;
    // Asegurar que historial esté oculto
    this.expandedHistoryElement = null;
  }

  cancelSubscribe(user: any) {
    let userId = user.id;
    let fundId = user.currentFunds[0].fondoId;

    this.fundsService.manageSubscription(userId, fundId, 'CANCEL').subscribe(response => {
      console.log('subscripcion cancelada con éxito', response);
      
      // Mostrar mensaje de éxito
      this.snackBar.open('Suscripción cancelada con éxito', 'Cerrar', {
        duration: 1500, // Duración en milisegundos
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      // Recargar la página después de 3 segundos
      setTimeout(() => {
        location.reload();
      }, 1600);
      
    }, error => {
      console.error('Error cancelando subscripcion', error);
      // Mostrar mensaje de error
      this.snackBar.open('Error cancelando la suscripción', 'Cerrar', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
