import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 0;
  timerState: 'Start' | 'Pause' | null = null;


  constructor() { }

  ngOnInit(): void {
  }

}
