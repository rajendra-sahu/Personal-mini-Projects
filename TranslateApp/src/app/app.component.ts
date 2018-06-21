import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {HttpHeaders} from  '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _employeesUrl = "https://systran-systran-platform-for-language-processing-v1.p.mashape.com/translation/text/translate?source=en&target=de&input=";
  private myheader = new HttpHeaders()
            .append('X-Mashape-Key', 'RDVAlLwX9GmshUChPtsCZvc2R4Jhp12uR1mjsn2ngqPa2mFpwi')
            .append('Accept', 'application/json')
            .append('Method', 'GET')
            .append('Access-Control-Allow-Headers', 'Content-Type');
           
  constructor(private _http: HttpClient) {}
  title = 'Translate App';
  output:Observable<string>;
  result:JSON;
   
  translate(text:string)
  {
    this._employeesUrl+=encodeURIComponent(text);
    console.log(text);
    console.log(this._employeesUrl);
    this._http.get(this._employeesUrl, {headers:this.myheader}).subscribe((res)=>{console.log(res);this.output=JSON.stringify(res.outputs[0].output);res={};
    this._employeesUrl="https://systran-systran-platform-for-language-processing-v1.p.mashape.com/translation/text/translate?source=en&target=de&input=";});
    //this.output=this._http.get(this._employeesUrl, {headers:this.myheader}).outputs[0].output;
  }
  
}
