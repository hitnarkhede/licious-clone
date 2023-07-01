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

  openCart() {}
  openLoginForm() {
    this.loginData.isLoginFormOpen = true;
    let elements = document.getElementsByClassName('p-sidebar-mask-hidden');
    for (let i = 0; i < elements.length; i++) {
      elements[i]?.classList.add('p-sidebar-mask');
    }
  }
}
