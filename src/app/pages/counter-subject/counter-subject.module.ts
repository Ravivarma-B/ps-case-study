import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterSubjectRoutingModule } from './counter-subject-routing.module';
import { CounterSubjectComponent } from './counter-subject.component';
import { TrackComponent } from './track/track.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
import { CounterService } from './counter.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterSubjectComponent,
    TrackComponent,
    LogsComponent,
    SettingsComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    CounterSubjectRoutingModule,
    FormsModule
  ], 
  providers: [CounterService]
})
export class CounterSubjectModule {
  
}
