import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingBannerViewRoutingModule } from './floating-banner-view-routing.module';
import { FloatingBannerViewComponent } from './floating-banner-view.component';


@NgModule({
  declarations: [
    FloatingBannerViewComponent
  ],
  imports: [
    CommonModule,
    FloatingBannerViewRoutingModule
  ]
})
export class FloatingBannerViewModule { }
