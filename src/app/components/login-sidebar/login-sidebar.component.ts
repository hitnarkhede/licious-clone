import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-sidebar',
  templateUrl: './login-sidebar.component.html',
  styleUrls: ['./login-sidebar.component.scss'],
})
export class LoginSidebarComponent {
  @Input() loginData: any;
  textEntered: boolean = false;
  isLoginBtnDisabled: boolean = true;

  onInputChange(e: any) {
    if (e.target.value.length > 0) this.textEntered = true;
    else this.textEntered = false;

    if (e.target.value.length == 10) this.isLoginBtnDisabled = false;
    else this.isLoginBtnDisabled = true;
  }

  onSidebarClose() {
    let elements: HTMLCollection =
      document.getElementsByClassName('p-sidebar-mask');
    for (let i = 0; i < elements.length; i++) {
      elements[i]?.classList.add('p-sidebar-mask-hidden');
      elements[i]?.classList.remove('p-sidebar-mask');
    }
  }
}
