import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  interval: any;

  @Input()
  countdown: number = 0;

  @Input()
  set timerState(state:  'Start' | 'Pause' | null) {
    if (state == 'Start') this.startTimer();
    else this.clearOrPauseTimer();
  }


  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.countdown === 0) return this.clearOrPauseTimer();
      this.countdown--;
    }, 1000);
  }

  clearOrPauseTimer() { if (this.interval) clearInterval(this.interval); }

}
