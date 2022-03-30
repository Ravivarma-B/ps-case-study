import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { TimerComponent } from './timer/timer.component';
import { SettingsComponent } from './settings/settings.component';
import { LogsComponent } from './logs/logs.component';
import { TrackComponent } from './track/track.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent,
    TimerComponent,
    SettingsComponent,
    LogsComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
