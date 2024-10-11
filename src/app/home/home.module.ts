import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShipmentSearchComponent } from './shipment-search/shipment-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonTableComponent } from '../basecomponent/table-component/common-table/common-table.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShipmentSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    FormsModule 
  ],
})
export class HomeModule { }
