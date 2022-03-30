import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  countdown = 0;
  state: 'Start' | 'Pause' | null = null;

  constructor(private counterSvc: CounterService) { }

  ngOnInit(): void {
  }

  emitState(state: 'Start' | 'Pause' | null ) {
    if (!this.state || !state) this.counterSvc.countdown.next(this.countdown);
    this.state = state; 
    this.counterSvc.timerState.next(this.state);
  }

}
