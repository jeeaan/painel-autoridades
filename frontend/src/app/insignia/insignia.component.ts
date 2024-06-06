import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.component.html',
  styleUrls: ['./insignia.component.css']
})
export class InsigniaComponent implements OnChanges {
  @Input() estadoChefe?: string;
  @Input() estadoDiretoria?: string;
  urlInsignia: string = '';

  urlChefePresente: string = '../assets/imagens/gen_div_sem_funcao.jpg';
  urlChefeAusente: string = '../assets/imagens/dct.gif';
  urlDiretoriaPresente: string = '../assets/imagens/gen_div_df.jpeg';
  urlDiretoriaAusente: string = '../assets/imagens/df.png';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateInsigniaUrl();
  }

  updateInsigniaUrl() {
    if (this.estadoChefe === 'Presente') {
      this.urlInsignia = this.urlChefePresente;
    } else if (this.estadoChefe === 'Ausente') {
      this.urlInsignia = this.urlChefeAusente;
    } else if (this.estadoDiretoria === 'Presente') {
      this.urlInsignia = this.urlDiretoriaPresente;
    } else if (this.estadoDiretoria === 'Ausente') {
      this.urlInsignia = this.urlDiretoriaAusente;
    }
  }

  isPresente(): boolean {
    return this.estadoChefe === 'Presente' || this.estadoDiretoria === 'Presente';
  }

  isAusente(): boolean {
    return this.estadoChefe === 'Ausente' || this.estadoDiretoria === 'Ausente';
  }
}