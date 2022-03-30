import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch:'full' },
  { path: 'counter', loadChildren: () => import('./pages/counter/counter.module').then(m => m.CounterModule) },
  { path: 'dynamic-div-view', loadChildren: () => import('./pages/dynamic-div-view/dynamic-div-view.module').then(m => m.DynamicDivViewModule) },
  { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
  { path: 'floating-banner-view', loadChildren: () => import('./pages/floating-banner-view/floating-banner-view.module').then(m => m.FloatingBannerViewModule) },
  { path: 'counter-subject', loadChildren: () => import('./pages/counter-subject/counter-subject.module').then(m => m.CounterSubjectModule) },
  { path: 'student', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
