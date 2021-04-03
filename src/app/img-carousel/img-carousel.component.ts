import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.css']
})
export class ImgCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public crime_list = [
    {
      crimeTitle: 'Xiao Zhen Xie, 75, was punched by a white man',
      //crimeDescription: 'Video footage of the aftermath of the attack against Xiao Zhen Xie, 75, prompted outrage across the United States.Credit...CBS San Francisco',
      crimeDescription: '',
      img: './assets/img/XiaoZhenXie.png'
    },
    {
      crimeTitle: 'Atlanta SPA Shootings',
      crimeDescription: 'Six Asian women dead including Emily Tan',
      img: './assets/img/AtlantaShooting.png'
    },
    {
      crimeTitle: 'Brandon Elliot assault on a 65-year-old Asian woman',
      crimeDescription: '',
      img: './assets/img/BrandonElliot.png'
    }
  ]

}
