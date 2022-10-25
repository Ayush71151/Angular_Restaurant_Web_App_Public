import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { RouterLink } from '@angular/router';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  collection: any = [];

  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  bata={name1:"ayush",org:{id:1,org_id:4,orgname:"zehn"}}
 timepass(){
  console.log(this.bata.org.org_id)
 }
  



 login = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  })
  logIn() {

    // console.log(this.bata.org.org_id)

    console.log(this.login.value.email)
    let e: any = this.login.value.email;
    let p: any = this.login.value.pass;
    let userlogin: boolean = false;

    this.resto.logindata().subscribe((result) => {
      this.collection = result;
      let len = this.collection.length;

      for (let i = 0; i < len; i++) {

        if (this.collection[i].email == e && this.collection[i].pass == p) {
         let userlogin=true 
          console.warn(userlogin)
          
        }
      }

      if (userlogin){
        console.warn("Invalid Id and Password")
      }

    })
  }



}