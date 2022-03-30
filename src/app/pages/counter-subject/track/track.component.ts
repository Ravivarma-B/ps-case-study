import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  start = 0;
  pause = 0;

  constructor(private counterSvc: CounterService) { }

  ngOnInit(): void {
    this.counterSvc.timerState.subscribe(state => {
      if (state == 'Start') this.start++;
      if (state == 'Pause') this.pause++;
    });
  }

}
