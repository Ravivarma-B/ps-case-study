import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {

  countdown: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  timerState: BehaviorSubject<'Start' | 'Pause' | null> = new BehaviorSubject<'Start' | 'Pause' | null>(null); 

  constructor() { }
}
