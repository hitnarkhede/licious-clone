import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  bestsellers: any[] = [];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 50,
    margin: 15,
    autoWidth: true,
    startPosition: 0,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    items: 4,
    lazyLoad: false,
    navText: [
      '<img src="../../../assets/icons/carousel_arrow-l.svg"/>',
      '<img src="../../../assets/icons/carousel_arrow-r.svg"/>',
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
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.bestsellers = this.commonService.getBestsellers();
  }
}
