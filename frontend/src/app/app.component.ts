import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estadoChefe: string = 'Ausente';
  estadoSubchefe: string = 'Ausente';
  estadoDiretoria: string = 'Ausente';
  estadoSubdiretoria: string = 'Ausente';

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
}