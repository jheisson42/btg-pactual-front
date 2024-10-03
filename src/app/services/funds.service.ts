import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  private apiUrl = 'http://localhost:8080';  // URL de la API REST
  private path = 'funds'

  constructor(private http: HttpClient) { }

  // Obtener lista de fondos disponibles
  getFunds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.path}/get-all-funds`);
  }

  // Suscribir a un fondo
  manageSubscription(funds: any): Observable<any> {

    // Realiza la petición POST con parámetros de consulta en la URL
    return this.http.post(`${this.apiUrl}/${this.path}/manage-subscription`, funds);
  }


  // Cancelar suscripción
  cancelar(usuarioId: string, fondoId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.path}/cancelar`, { usuarioId, fondoId });
  }
}
