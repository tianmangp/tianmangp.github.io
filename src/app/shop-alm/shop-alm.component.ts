import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-alm',
  templateUrl: './shop-alm.component.html',
  styleUrls: ['./shop-alm.component.css']
})
export class ShopAlmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLink(){
    let url = "https://my-store-11686238.preview.teespring.com/listing/hate-is-the-real-virus?product=46&variation=2739&size=423";
    window.open(url, '_blank');
  }
}
