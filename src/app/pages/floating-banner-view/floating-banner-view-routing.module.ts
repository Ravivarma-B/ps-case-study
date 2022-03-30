import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatingBannerViewComponent } from './floating-banner-view.component';

const routes: Routes = [{ path: '', component: FloatingBannerViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingBannerViewRoutingModule { }
