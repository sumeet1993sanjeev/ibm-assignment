import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent {
  shipments: any = [];
  rawData: any = [];
  searchTerm: any;
  refreshCounter = 0;

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


    this.getShipmentsData();

  }

  checkForEmptyFields(data: any) {
    return !(data == undefined || data === "");
  }

  getShipmentsData() {
    this.http.get<any>('assets/shipment-list.json').subscribe(
      (data: any) => {
        this.rawData = data.Shipments;
        console.log(this.rawData); // To verify that data is loaded
        this.afterDataLoaded();    // Call the method after data is loaded
      },
      (error: any) => {
        console.error('Error loading JSON data', error);
      }
    );
  }

  afterDataLoaded() {
    let data: any = {};
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.checkForEmptyFields(params["orderNumber"])) {
        data["OrderNo"] = params["orderNumber"];

      }
      if (this.checkForEmptyFields(params["shipmentNumber"])) {
        data["ShipmentNo"] = params["shipmentNumber"];
      }
      if (this.checkForEmptyFields(params["phoneNumber"])) {
        if (data["BillToAddress"] == undefined) {
          data["BillToAddress"] = {};
        }
        data["BillToAddress"]["DayPhone"] = params["phoneNumber"];
      }
      if (this.checkForEmptyFields(params["emailId"])) {
        if (data["BillToAddress"] == undefined) {
          data["BillToAddress"] = {};
        }
        data["BillToAddress"]["EMailID"] = params["emailId"];

      }
      if (this.checkForEmptyFields(params["firstName"])) {
        if (data["BillToAddress"] == undefined) {
          data["BillToAddress"] = {};
        }
        data["BillToAddress"]["FirstName"] = params["firstName"];

      }
      if (this.checkForEmptyFields(params["lastName"])) {
        if (data["BillToAddress"] == undefined) {
          data["BillToAddress"] = {};
        }
        data["BillToAddress"]["LastName"] = params["lastName"];
      }
    });
    // if(this.checkForEmptyFields()) {
    this.shipments = this.rawData;
    this.refreshCounter++;
    if (Object.keys(data).length != 0) {
      for (const [index, shipmentData] of this.rawData["Shipment"].entries()) {
        let isFound: boolean = true;
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value = data[key];
            let k1 = key;
            if (typeof value === 'object') {
              for (const nestedData in value) {
                let k2 = nestedData;
                if (shipmentData[k1][k2] != value[nestedData]) {
                  isFound = false;
                  break;
                }
              }
            } else {
              if (shipmentData[key as any] != data[key]) {
                isFound = false;
                break;
              }
            }
          }
        }
        if (isFound) {
          this.shipments["Shipment"] = [];
          this.shipments["Shipment"].push(shipmentData);
          this.shipments["TotalNumberOfRecords"] = 1;
          this.refreshCounter++;
          break;
        } else {
          this.shipments["Shipment"] = [];
          this.shipments["TotalNumberOfRecords"] = 0;
        }

      }
    }

  }


  onRowClick(shipment: any): void {

  }

  onclickBack() {
    this.router.navigate(['/home']);
  }

  getLength(property: any) {
    if (!!property) {
      return property;
    }
    return 0;
  }

  onClose() {
    this.router.navigate(['/home']);
  }
}
