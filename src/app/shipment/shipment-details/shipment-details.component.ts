import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import shipmentDetails from '../../../assets/shipment-details.json';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit {
  shipment: any;
  shipmentDetails: any;
  shipmentNo: any;
  isDivExpanded = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.shipmentDetails = shipmentDetails;
    this.shipmentNo = this.activatedRoute.snapshot.paramMap.get('shipmentNumber');
    if (this.shipmentDetails["Shipment"]["ShipmentNo"] == this.shipmentNo) {
      this.shipment = shipmentDetails["Shipment"];
    }
    console.log(this.shipment);
    // Fetch the shipment details based on shipmentNo (mock or real API)
  }

  getPropertyValue(property: any) {
    if (!!property) {
      return property;
    }
    return "";
  }

  onclickBack() {
    this.router.navigate(['/shipment/results'], {
      queryParams: {
        shipmentNumber: this.shipmentNo
      }
    });
  }

  onClose() {
    this.router.navigate(['/home']);
  }

  toggleDiv() {
    this.isDivExpanded = !this.isDivExpanded;
  }

  getElement(element: any, index: any) {
    if (element == undefined) {
      return "";
    }
    return element.split(",")[index];
  }

}
