import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div-view',
  templateUrl: './dynamic-div-view.component.html',
  styleUrls: ['./dynamic-div-view.component.scss']
})
export class DynamicDivViewComponent implements OnInit {

  cards = new Array(100);

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(i: number) { alert(`Button in ${i+1}th Div clicked`); }

  onScroll() { this.cards.length += 100; }

}
