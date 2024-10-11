import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipment-results',
  templateUrl: './shipment-results.component.html',
  styleUrls: ['./shipment-results.component.scss']
})
export class ShipmentResultsComponent implements OnInit {
  shipments: any[] = [];
  totalRecords: number = 0;
  currentPage: number = 1;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMoreShipments();
  }

  loadMoreShipments(): void {
    // Mock API to load more shipment data
    this.http.get('assets/shipment-list.json').subscribe((data: any) => {
      this.shipments = [...this.shipments, ...data['Shipments']['Shipment']];
      this.totalRecords = data['Shipments']['TotalNumberOfRecords'];
    });
  }
}
