import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './template/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { ProcurarVeiculosComponent } from './components/veiculos/procurar-veiculos/procurar-veiculos.component';
import { UltimosVistosComponent } from './components/veiculos/ultimos-vistos/ultimos-vistos.component';
import { VendaVeiculoComponent } from './components/veiculos/venda-veiculo/venda-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProcurarVeiculosComponent,
    UltimosVistosComponent,
    VendaVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
