import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Details } from '../../../details';
import {HttpClientModule} from '@angular/common/http';
import {Settings} from '../../../settings';
import {environment} from '../../../../environments/environment';


@Injectable()
export class WebService {
	private url:string;
	public setting: Settings;
  public setUrl(url){
    this.url = url;
  }

  constructor(private http: Http) {

     }

  getPosts(): Observable<Details[]>{
  	return this.http.get(this.url).map((response: Response) => {
  		return <Details[]>response.json();
  	})
  }

  getName(){
    return this.http.get(this.url).map(res => {
      return res;
    })
  }

  sendPosts(settings){
		//console.log(environment.send_url+'update/')
      console.log(settings)
    return this.http.post('http://localhost:1339/update/', settings);
  }

  sendapiurl(api)
  {
      return this.http.post('http://localhost:1339/insert/', api);
  }
  getconnections() {
      return this.http.get('http://localhost:1339/get/getconnections').map((response: Response) => {
          console.log(<Details[]>response.json())
          return <Details[]>response.json();
      })
      
  }
  getapidata() {
      return this.http.get('http://localhost:1339/get/apidata').map((response: Response) => {
          console.log(<Details[]>response.json())
          return <Details[]>response.json();
      })
  }
}
