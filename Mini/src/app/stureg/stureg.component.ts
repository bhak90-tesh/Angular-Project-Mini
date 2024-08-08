import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from './Student';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-stureg',
  templateUrl: './stureg.component.html',
  styleUrls: ['./stureg.component.css']
})
export class SturegComponent 
{

  formValue!: FormGroup; 

    studentobj : StudentModel = new StudentModel;

    constructor(private formbuilder : FormBuilder , private  api:ApiService){}
    btnSaveShow:boolean=true;


      ngOnInit():void{


            this.formValue = this.formbuilder.group({
                  name:[''],
                  class:[''],
                  email:[''],
                  address:[''],
                  city:[''],
                  password:['']
                
            })

      }


      AddStudent()
      {
    this.studentobj.address = this.formValue.value.address;
    this.studentobj.city=this.formValue.value.city;
    this.studentobj.name=this.formValue.value.name;
    this.studentobj.email=this.formValue.value.email;
    this.studentobj.password=this.formValue.value.password;
    this.studentobj.class=this.formValue.value.class;
           
                       this.api.PostStudent(this.studentobj).subscribe({
                            next:(v)=>{console.log("object in key value par   ",  v)},

                            error: (e)=>{
                                 alert("Error")
                            },
                            complete :() =>{
                                console.log("completed")
                                alert("data saved")

                            }



                       })
      }

}
