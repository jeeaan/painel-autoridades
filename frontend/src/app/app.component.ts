import { Component, OnInit } from '@angular/core';
import { EstadoService } from './estado/estado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  estadoChefe: string = 'Ausente';
  estadoSubchefe: string = 'Ausente';
  estadoDiretoria: string = 'Ausente';
  estadoSubdiretoria: string = 'Ausente';

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.carregarEstado('1', 'estadoChefe');
    this.carregarEstado('2', 'estadoSubchefe');
    this.carregarEstado('3', 'estadoDiretoria');
    this.carregarEstado('4', 'estadoSubdiretoria');
  }

  atualizarEstado(nrBotao: string, novoEstado: string): void {
    switch (nrBotao) {
      case '1':
        this.estadoChefe = novoEstado;
        break;
      case '2':
        this.estadoSubchefe = novoEstado;
        break;
      case '3':
        this.estadoDiretoria = novoEstado;
        break;
      case '4':
        this.estadoSubdiretoria = novoEstado;
        break;
    }
  }

  private carregarEstado(nrBotao: string, estadoProp: string): void {
    this.estadoService.getEstado(nrBotao).subscribe(
      (response) => {
        (this as any)[estadoProp] = response.state;
      },
      (error) => {
        console.error(`Erro ao obter o estado do botão ${nrBotao}:`, error);
      }
    );
  }
}