import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.scss']
})
export class ShipmentSearchComponent {
  orderNumber: string = '';
  shipmentNumber: string = '';
  firstName: string = "";
  lastName: string = "";
  emailId: string = "";
  phoneNumber: string = "";

  constructor(private router: Router) { }

  onSearch() {
    this.router.navigate(['/shipment/results'], {
      queryParams: {
        orderNumber: this.orderNumber,
        shipmentNumber: this.shipmentNumber, phoneNumber: this.phoneNumber,
        emailId: this.emailId, firstName: this.firstName, lastName: this.lastName
      }
    });
  }

  onReset() {
    this.orderNumber = '';
    this.shipmentNumber = '';
    this.firstName = '';
    this.lastName = '';
    this.emailId = '';
    this.phoneNumber = '';
    console.log('Form reset');
  }
}
