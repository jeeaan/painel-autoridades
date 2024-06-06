import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelogioComponent } from './relogio/relogio.component';
import { AutoridadeComponent } from './autoridade/autoridade.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { EstadoComponent } from './estado/estado.component';
import { InsigniaComponent } from './insignia/insignia.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    RelogioComponent,
    AutoridadeComponent,
    CarrosselComponent,
    EstadoComponent,
    InsigniaComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
