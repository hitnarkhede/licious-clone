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
}
