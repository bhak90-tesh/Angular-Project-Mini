import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private    _http : HttpClient) { }

  PostStudent(data:any)
  {
         return this._http.post<any>("http://localhost:3000/posts" ,data).pipe(map((res:any)=>{
          return res;

         
         }))

  }
  getStudent(){}
  putStudent(){}
  deleteStudent(){}




}
