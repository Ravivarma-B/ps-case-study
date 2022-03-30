import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs: string[] = [];

  constructor(private counterSvc: CounterService) { }

  ngOnInit(): void {
    this.counterSvc.timerState.subscribe(state => {
      if (!state) return;
      this.logs.push(`${state}ed at ${new Date()}`)
    });
  }

}
