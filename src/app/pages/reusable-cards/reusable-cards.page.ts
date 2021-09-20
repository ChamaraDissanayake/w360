import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-reusable-cards',
  templateUrl: './reusable-cards.page.html',
  styleUrls: ['./reusable-cards.page.scss'],
})
export class ReusableCardsPage implements OnInit {

  numbers = [];
  names = [];
  descriptions = [];

  @ViewChild('fixFocus') fixFocus;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  
  constructor(private platform: Platform) { }


  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.numbers[i] = i;
      this.names[i] = "Chamara " + i;
      this.descriptions[i] = this.getRandomString(300);
    }
  }

  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  gotoTop(){
    this.platform.ready().then(()=>{
      this.content.scrollToPoint(0,this.fixFocus.nativeElement.offsetTop-68,1500);
    })
  }
}
