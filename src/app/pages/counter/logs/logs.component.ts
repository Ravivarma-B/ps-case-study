import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs: string[] = [];

  @Input()
  set timerState(state:  'Start' | 'Pause' | null) {
    if (!state) return;
    this.logs.push(`${state == 'Start' ? 'Started' : 'Paused'} at ${new Date()}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
