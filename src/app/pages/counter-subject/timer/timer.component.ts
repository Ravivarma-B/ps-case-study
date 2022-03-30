import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  countdown: number = 0;
  interval: any;

  constructor(private counterSvc: CounterService) { }

  ngOnInit(): void {
    this.counterSvc.countdown.subscribe(c => this.countdown = c);
    this.counterSvc.timerState.subscribe(state => {
      if (state == 'Start') this.startTimer();
      else this.clearOrPauseTimer();
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.countdown === 0) return this.clearOrPauseTimer();
      this.countdown--;
    }, 1000);
  }

  clearOrPauseTimer() { if (this.interval) clearInterval(this.interval); }

}
