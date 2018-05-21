import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../shared/services/webservice/web.service';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.scss']
})
export class ApiserviceComponent implements OnInit {

    constructor(private http: HttpClient,
        private webService: WebService) { }

  ngOnInit() {

       

  }
    store(value) {
        console.log(value);
        this.webService.sendapiurl(value).subscribe(newData => console.log('send'));

    }
}
