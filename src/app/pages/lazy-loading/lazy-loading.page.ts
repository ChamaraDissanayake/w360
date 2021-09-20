import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import VRImages from './../../../assets/scripts/VRImages.json'

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.page.html',
  styleUrls: ['./lazy-loading.page.scss'],
})
export class LazyLoadingPage implements OnInit {
  vrImages = VRImages;
  defaultImage = "../../../assets/images/loader.gif";
  
  @ViewChild('fixFocus') fixFocus;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private platform: Platform) { }

  ngOnInit() {
    // console.log(this.vrImages)
  }

  gotoTop(){
    this.platform.ready().then(()=>{
      this.content.scrollToPoint(0,this.fixFocus.nativeElement.offsetTop-68,1500);
    })
  }
}
