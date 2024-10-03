import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.api;  // URL de la API REST
  private path = 'user'

  constructor(private http: HttpClient) { }

  // Obtener lista de usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.path}/get-all-users`);
  }

  // Registrar nuevo usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.path}/register-user`, usuario);
  }

  // Obtener usuario por ID
  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.path}/get-user/${id}`);
  }
}
