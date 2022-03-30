import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  countdown = 0;
  state: 'Start' | 'Pause' | null = null;

  @Output()
  stateEmitter = new EventEmitter<'Start' | 'Pause' | null>();


  @Output()
  countdownEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitState(state: 'Start' | 'Pause' | null) {
    if (!this.state || !state) this.countdownEmitter.emit(this.countdown);
    this.state = state; 
    this.stateEmitter.emit(this.state);
  }

}
