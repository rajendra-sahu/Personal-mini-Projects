import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{Deal}from '../deal'
import {DealService} from '../deal.service';

@Component({
  selector: 'app-private-deals',
  templateUrl: './private-deals.component.html',
  styleUrls: ['./private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  privateDeals$:Observable<Deal[]>;

  constructor(public dealService: DealService) { }

  ngOnInit() {
    this.privateDeals$=this.dealService.getPrivateDeals();
  }

}
