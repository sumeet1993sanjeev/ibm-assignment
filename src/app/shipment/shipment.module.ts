import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment.component';
import { ShipmentResultsComponent } from './shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonTableComponent } from '../basecomponent/table-component/common-table/common-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShipmentComponent,
    ShipmentResultsComponent,
    ShipmentDetailsComponent,
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    InfiniteScrollModule,
    TranslateModule,
    FormsModule 
  ]
})
export class ShipmentModule { }
