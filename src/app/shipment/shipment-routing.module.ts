import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentComponent } from './shipment.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';

const routes: Routes = [{ path: 'results', component: ShipmentComponent },
  { path: 'details/:shipmentNumber', component: ShipmentDetailsComponent }, 
  { path: '', redirectTo: 'results', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
