import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadingPage } from './lazy-loading.page';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingPageRoutingModule {}
