import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import{Deal}from './deal'
import 'rxjs/add/observable/throw';
import { AuthService } from './auth/auth.service';

@Injectable()
export class DealService {
  private publicDealsUrl = 'http://localhost:3001/api/deals/public';
  private privateDealsUrl = 'http://localhost:3001/api/deals/private';

  constructor( private http: HttpClient,
    private authService: AuthService) { }
  
  getPublicDeals():Observable<Deal[]>
  {
    return this.http
      .get(this.publicDealsUrl)
      //.first()
      .pipe(
        catchError(this.handleError)
      );
  }
  getPrivateDeals():Observable<Deal[]> {
    return this.http
      .get(this.privateDealsUrl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
  purchase(item) {
    alert(`You bought the: ${item.name}`);
  }

}
