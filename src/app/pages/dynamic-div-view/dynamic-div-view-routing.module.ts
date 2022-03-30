import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDivViewComponent } from './dynamic-div-view.component';

const routes: Routes = [{ path: '', component: DynamicDivViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivViewRoutingModule { }
