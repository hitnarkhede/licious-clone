import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() checkoutData: any;
  @Input() loginData: any;
  cartEmpty: boolean = false;
  ngOnInit(): void {}

  openCart() {
    console.log('Cart');
  }
  openLoginForm() {
    this.loginData.isLoginFormOpen = true;
    console.log('Cart');
  }
}
