import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  alert:boolean=false
  addResto =new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    add:  new FormControl(''),
  })

  ngOnInit(): void {
  }
 collectResto(){
  this.resto.saveresto(this.addResto.value).subscribe((result)=>{
    this.alert=true
    console.log(result)
  }) 
  this.addResto.reset()
 }
closeAlert()
  {
   this.alert=false
  }


}
