import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './template/home/home.component';
import { ProcurarVeiculosComponent } from './components/veiculos/procurar-veiculos/procurar-veiculos.component';
import { UltimosVistosComponent } from './components/veiculos/ultimos-vistos/ultimos-vistos.component';
import { VendaVeiculoComponent } from './components/veiculos/venda-veiculo/venda-veiculo.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'veiculos', component:ProcurarVeiculosComponent},
  {path: 'veiculos/ultimos-visto', component:UltimosVistosComponent},
  {path: 'veiculos/venda-veiculo', component:VendaVeiculoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
