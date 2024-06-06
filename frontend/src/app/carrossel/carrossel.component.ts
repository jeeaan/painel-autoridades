import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {

  constructor(private sanitizer: DomSanitizer) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://intranet.dct.eb.mil.br/#camera_wrap_425');
  }

  iframeUrl: SafeResourceUrl;
}
