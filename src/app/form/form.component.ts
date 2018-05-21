import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { WebService } from '../shared/services/webservice/web.service';
import { Connection } from '../connection'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor(private http: HttpClient,
        private webService: WebService, private con: Connection) { }
        private services
        private connections
        private conservice = []
        private condetails = this.con.conobject
        private updatevalue = {}
        private active = true;
        
        ngOnInit() {
             
            //console.log(this.con.conobject)
            this.getconnections()
            this.condetails = this.con.conobject
  }

  store(value){
      console.log(value);
      console.log(this.condetails)
      value._id = this.condetails._id;
      var f=false
      this.webService.sendPosts(value).subscribe(newData => console.log('send'));
      console.log("done sent")

  }
 

 

  services1(services) {

      this.services = services
      console.log(this.services)
  }

  getconnections()
  {
      console.log("In component form")
       this.webService.getconnections().subscribe(
           resultArray => {
               this.connections = resultArray;
               console.log(this.connections)
               var i=0
               for (var item of this.connections) {
                   //console.log(item.host)
                   this.conservice[i]=item.service
                   i = i + 1;
               }
               console.log(this.conservice)
          },
          error => console.log("Error: " + error)
       )

  }
  Editconnections(value)
  {
      
      for (var item of this.connections) {
          if (item.service == value) {
              this.condetails = item
              console.log(this.condetails)
          }
      }

  }

  

}
