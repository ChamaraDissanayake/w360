import { Component, OnInit } from '@angular/core';
import { W360Service } from 'src/app/providers/w360.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(public w360Service: W360Service) { }

  ngOnInit() {
  }

}
