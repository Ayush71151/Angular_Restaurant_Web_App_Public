 import { Component, OnInit } from '@angular/core';
 import { FormGroup,FormControl } from '@angular/forms';
 import { RestoService } from '../resto.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto:RestoService) { }

  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    pass:new FormControl(''),
  })

  alert:boolean=false

  ngOnInit(): void {}

  collection(){

    console.warn(this.register.value)
    
    this.resto.register(this.register.value).subscribe(()=>{
      this.alert=true
    }) ,
    this.register.reset()
    }

   closeAlert()
  {
   this.alert=false
  }
}