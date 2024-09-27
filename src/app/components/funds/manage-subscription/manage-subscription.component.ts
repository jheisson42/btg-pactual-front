import { Component, OnInit } from '@angular/core';
import { FundsService } from '../../../services/funds.service';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html'
})
export class SubscribeFundsComponent implements OnInit {
  fondos: any[] = [];

  constructor(private fondoService: FundsService) { }

  ngOnInit(): void {
    this.fondoService.getFunds().subscribe(data => {
      this.fondos = data;
    });
  }

  suscribir(usuarioId: string, fondoId: string): void {
    /*this.fondoService.suscribir(usuarioId, fondoId).subscribe(response => {
      console.log('Suscripción exitosa', response);
    }, error => {
      console.error('Error en la suscripción', error);
    });*/
  }

  cancelar(usuarioId: string, fondoId: string): void {
   /* this.fondoService.cancelar(usuarioId, fondoId).subscribe(response => {
      console.log('Suscripción cancelada', response);
    }, error => {
      console.error('Error al cancelar', error);
    });*/
  }
}
