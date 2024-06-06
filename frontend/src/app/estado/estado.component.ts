import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { EstadoService } from './estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estado: string = 'Ausente';
  @Output() estadoAlterado = new EventEmitter<string>();
  @Input() nrBotao: string = '';

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    // Chama o método getEstado ao inicializar o componente
    this.estadoService.getEstado(this.nrBotao).subscribe(
      (response) => {
        this.estado = response.state;
      },
      (error) => {
        console.error('Erro ao obter o estado:', error);
      }
    );
  }

  alternarEstado(): void {
    this.estado = this.estado === 'Presente' ? 'Ausente' : 'Presente';
    this.estadoAlterado.emit(this.estado);

    // Atualiza o estado no servidor ao alternar
    this.estadoService.atualizarEstado(this.nrBotao, this.estado === 'Presente' ? 1 : 0);
  }
}
