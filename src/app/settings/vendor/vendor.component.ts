import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  shops: any = [];

  constructor() { }

  ngOnInit() {
    this.shops = this.getShops();
  }

  getShops() {
    return [
      {
        name: 'Billy\'s farm'
      }
    ]

  }

}
