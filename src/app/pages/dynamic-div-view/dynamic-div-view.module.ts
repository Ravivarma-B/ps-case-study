import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivViewRoutingModule } from './dynamic-div-view-routing.module';
import { DynamicDivViewComponent } from './dynamic-div-view.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    DynamicDivViewComponent
  ],
  imports: [
    CommonModule,
    DynamicDivViewRoutingModule,
    InfiniteScrollModule
  ]
})
export class DynamicDivViewModule { }
