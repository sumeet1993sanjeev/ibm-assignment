import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentResultsComponent } from './shipment/shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment/shipment-details/shipment-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shipment',
    loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule)
  },
  { path: 'shipments/results/details', component: ShipmentDetailsComponent },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
