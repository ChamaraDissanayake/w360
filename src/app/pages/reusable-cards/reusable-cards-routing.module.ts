import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReusableCardsPage } from './reusable-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ReusableCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReusableCardsPageRoutingModule {}
