import { Component, OnInit } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { FormGroup, FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  url = "http://ws.up.ac.th//mobile/AuthenService.asmx/Login"
  //username=string&password=string&platformName=string&deviceType=string&ProductName=string&ServiceUser=string&ServicePass=string
  data
  myform: FormGroup
  constructor(public http:Http) {

  }

  getData(){
      this.data = this.http.get(this.url, JSON.stringify({
                                          username: this.myform.value.username,
                                          password: this.myform.value.password,
                                          platformName : "",
                                          deviceType : "",
                                          ProductName: "",
                                          ServiceUser: "",
                                          ServicePass: ""
                                          }))
                      .toPromise()
                      .then(response => response.json())
                      .catch(this.checkError);
                      console.log("data",this.data);
  }

  checkError(){

  }
  ngOnInit() {
    this.myform = new FormGroup({
      
          username: new FormControl('', Validators.required), 
          password: new FormControl('', Validators.pattern('[A-Za-z]{5}'))                   
                               });
                              
  }

  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    console.log("submit",this.submitted);
    console.log("user :",this.myform.value.username);
    this.getData();
  }
}
