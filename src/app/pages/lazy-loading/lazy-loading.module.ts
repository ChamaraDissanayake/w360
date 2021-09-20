import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LazyLoadingPageRoutingModule } from './lazy-loading-routing.module';

import { LazyLoadingPage } from './lazy-loading.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LazyLoadingPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [LazyLoadingPage]
})
export class LazyLoadingPageModule {}
