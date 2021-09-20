import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    loop: true
  };

  constructor(private menu: MenuController) {}
  
  ionViewDidEnter(){
    this.menu.swipeGesture(true);
  }

  ionViewWillLeave(){
    this.menu.swipeGesture(false);
  }

  ngOnInit(){
  }
}
