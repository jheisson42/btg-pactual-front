import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FundsService } from '../services/funds.service';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  funds: any[] = [];
  selectedFund: any; 

  constructor(public fundsService: FundsService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.fundsService.getFunds().subscribe(data => {
      console.log('data: ', data);      
      this.funds = data;
    });
  }

  onSubmit(): void {
      let userId = this.data.usuario.id;
      let fundId = this.selectedFund ;

    this.fundsService.manageSubscription(userId, fundId, 'SUBSCRIBE').subscribe(response => {
      console.log('subscripcion con éxito', response);
      
      // Mostrar mensaje de éxito
      this.snackBar.open('Suscripción con éxito', 'Cerrar', {
        duration: 1500, // Duración en milisegundos
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      // Recargar la página después de 3 segundos
      setTimeout(() => {
        location.reload();
      }, 1600);
      
    }, error => {
      let err = error.error.error;
      console.error('Error---->', err);
      // Mostrar mensaje de error
      this.snackBar.open('Error: ' + err, 'Cerrar', {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });

    this.dialogRef.close(); // Cerrar el modal y enviar datos
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
