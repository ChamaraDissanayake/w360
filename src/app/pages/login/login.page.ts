import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('loginPage', {static: false}) loginPage:ElementRef;

  constructor(
    private menu: MenuController,
    private animationCtrl: AnimationController,
    private platform: Platform) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menu.swipeGesture(false);
  }


  ngAfterViewInit() {
    this.platform.ready().then(()=>{
      this.animationCtrl.create()
      .addElement(this.loginPage.nativeElement)
      .duration(2000)
      .easing('ease-out')
      .delay(1000)
      .fromTo('opacity', 0, 1)
      .play();
    })
  }
}
