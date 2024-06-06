import { Component, Input, OnInit } from '@angular/core';
import { EstadoService } from '../estado/estado.service';

@Component({
  selector: 'app-autoridade',
  templateUrl: './autoridade.component.html',
  styleUrls: ['./autoridade.component.css']
})
export class AutoridadeComponent {
  @Input() estado?: string;
  @Input() nome?: string;
  @Input() imagem?: string;
  @Input() nrBotao: string = '';

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.estadoService.getEstado(this.nrBotao).subscribe(
      (response) => {
        this.estado = response.state;
      },
      (error) => {
        console.error('Erro ao obter o estado:', error);
      }
    );
  }

  ngOnChanges() {
  }

}