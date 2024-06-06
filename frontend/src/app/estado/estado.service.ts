import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  // Definir a parte comum da URL da API como uma constante
  private apiUrl = environment.urlBackEndBase+"/api/button-state/"
  // private apiUrl = 'http://localhost:3000/api/button-state/';

  constructor(private http: HttpClient) {}

  atualizarEstado(nrBotao: string, newState: number): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Define o corpo da requisição
    const body = { newState };

    // Faz a requisição POST para o endpoint desejado
    this.http.post(`${this.apiUrl}${nrBotao}`, body, { headers })
      .subscribe(
        (response) => {
          console.log('Requisição bem-sucedida:', response);
        },
        (error) => {
          console.error('Erro na requisição:', error);
        }
      );
  }

  getEstado(nrBotao: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${nrBotao}`);
  }
}
