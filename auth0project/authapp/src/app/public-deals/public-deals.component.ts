import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{Deal}from '../deal'
import {DealService} from '../deal.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals$:Observable<Deal[]>;


  constructor(public dealService: DealService
    ,public authService: AuthService) 
    {
    
   }

  ngOnInit() {
    this.publicDeals$=this.dealService.getPublicDeals();
  }

}
