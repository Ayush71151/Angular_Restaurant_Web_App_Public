import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private router:ActivatedRoute,private resto:RestoService) { }
  alert:boolean=false
  
  ngOnInit(): void {

    console.warn("***********",this.router.snapshot.params.id)
    
    this.resto.editResto(this.router.snapshot.params.id).subscribe((result)=>{
     console.warn("%%%%%%",result)
     this.EditResto =new FormGroup({
      name: new FormControl(result['name']),
      email:new FormControl(result['email']),
      add:  new FormControl(result['add']),
    })
    })
  }



  EditResto =new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    add:  new FormControl(''),
  })

  closeAlert()
  {
   this.alert=false
  }
  updatecollection( ){

    console.warn(this.EditResto.value),
    this.resto.updateResto(this.router.snapshot.params.id,this.EditResto.value).subscribe((result)=>{
    console.warn("result",result)
    })
    this.alert=true 
  }
}
