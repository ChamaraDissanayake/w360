import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menu: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.activatedRoute.snapshot.paramMap.get('id');
  }


}
