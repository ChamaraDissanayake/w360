import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { W360Service } from './providers/w360.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public w360Service: W360Service,
    private router: Router) {}

  gotoLogin(){
    setTimeout(() => {
      this.router.navigateByUrl("login");
    }, 500);
  }

  gotoMyProfile(){
    setTimeout(() => {
      this.router.navigateByUrl("my-profile");
    }, 500);
  }

  gotoReusableCards(){
    setTimeout(() => {
      this.router.navigateByUrl("reusable-cards");
    }, 500);
  }

  gotoLazyLoading(){
    setTimeout(() => {
      this.router.navigateByUrl("lazy-loading");
    }, 500);
  }
}
