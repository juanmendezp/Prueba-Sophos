import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path: '', redirectTo: 'busqueda', pathMatch: 'full' },
  {path: 'busqueda', component: BusquedaComponent, pathMatch: 'full'},
  {path: 'resumen', component: ResumenComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'busqueda', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
