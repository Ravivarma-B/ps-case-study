import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterSubjectComponent } from './counter-subject.component';

const routes: Routes = [{ path: '', component: CounterSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterSubjectRoutingModule { }
