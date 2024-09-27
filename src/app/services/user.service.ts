import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users';  // URL de la API REST

  constructor(private http: HttpClient) { }

  // Obtener lista de usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all-user`);
  }

  // Registrar nuevo usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-user`, usuario);
  }

  // Obtener usuario por ID
  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-user/${id}`);
  }
}
