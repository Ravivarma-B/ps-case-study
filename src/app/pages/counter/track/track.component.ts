import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  start = 0;
  pause = 0;

  @Input()
  set timerState(state:  'Start' | 'Pause' | null) {
    if (state == 'Start') this.start++;
    if (state == 'Pause') this.pause++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
