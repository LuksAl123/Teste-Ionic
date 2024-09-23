import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

@Input() hasHeader: boolean = false;
@Input() hasFooter: boolean = true;

  constructor() { }

  ngOnInit() {}

}
