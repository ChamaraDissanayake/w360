import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReusableCardsPageRoutingModule } from './reusable-cards-routing.module';

import { ReusableCardsPage } from './reusable-cards.page';
import { CommonCardComponent } from 'src/app/components/common-card/common-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReusableCardsPageRoutingModule
  ],
  declarations: [ReusableCardsPage, CommonCardComponent]
})
export class ReusableCardsPageModule {}
