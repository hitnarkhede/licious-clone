import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'licious-clone';

  loginData: any;
  cart: any;
  bestsellersHeading = 'Bestsellers';
  bestsellersSubHeading: string = 'Most popular products near you!';
  bestsellersData: any[] = [];

  combosHeading: string = 'Combos for you';
  combosSubHeading: string = 'Savour the savings!';
  combosData: any[] = [];

  lowersHeading = 'Rs 199 or lower!';
  lowersSubHeading = '';
  lowersData: any[] = [];

  breakfastHeading: string = 'Breakfast specials';
  breakfastSubHeading = '';
  breakfastData: any[] = [];

  bonelessHeading = 'Delicious boneless cuts';
  bonelessSubHeading = '';
  bonelessData: any[] = [];

  topRatedHeading: string = 'Top Rated';
  topRatedSubHeading = 'by meat-lovers like you!';
  topRatedData: any[] = [];

  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.loginData = this.commonService.loginData;
    this.cart = this.commonService.getCart();

    this.bestsellersData = this.commonService.getBestsellers();
    this.combosData = this.commonService.getCombos();
    this.lowersData = this.commonService.getLowers();
    this.breakfastData = this.commonService.getBreakfast();
    this.bonelessData = this.commonService.getBoneless();
    this.topRatedData = this.commonService.getTopRated();
  }
}
