import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  constructor() {}

  @Input() heading: string = '';
  @Input() subHeading: string = '';
  @Input() data: any[] = [];

  bestsellers: any[] = [];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 80,
    margin: 15,
    autoWidth: true,
    startPosition: 0,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    items: 5,
    lazyLoad: false,
    navText: [
      '<img src="../../../assets/icons/carousel_arrow-l.svg" class="carousel-prev-btn" />',
      '<img src="../../../assets/icons/carousel_arrow-r.svg" class="carousel-next-btn" />',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.bestsellers = this.data; //this.commonService.getBestsellers();
  }
}
