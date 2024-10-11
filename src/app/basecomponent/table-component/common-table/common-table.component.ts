import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnChanges {
  @Input() shipments: any = [];
  @Input() refreshCounter?: any = 0;
  @Output() onClick = new EventEmitter<any>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changed');
  }

  onRowClick(shipment: any): void {
    console.log('Row clicked:', shipment);
    this.onClick.emit(shipment);
  }

  getPropertyValue(property: any) {
    if (!!property) {
      return property;
    }
    return "";
  }

  onLinkClick() {
    console.log("link clicked");
  }
}
