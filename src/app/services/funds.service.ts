import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  private apiUrl = 'http://localhost:8080/funds';  // URL de la API REST

  constructor(private http: HttpClient) { }

  // Obtener lista de fondos disponibles
  getFunds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all-funds`);
  }

  // Suscribir a un fondo
  manageSubscription(usuarioId: string, fondoId: string, action: string): Observable<any> {
    // Crea un objeto HttpParams
    const params = new HttpParams()
      .set('usuarioId', usuarioId)
      .set('fondoId', fondoId)
      .set('action', action);

    // Realiza la petición POST con parámetros de consulta en la URL
    return this.http.post(`${this.apiUrl}/manage-subscription`, {}, { params });
  }


  // Cancelar suscripción
  cancelar(usuarioId: string, fondoId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/cancelar`, { usuarioId, fondoId });
  }
}
