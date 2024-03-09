import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

getData(){
  return this.http.get("http://localhost:3000/adv");
}

postData(data:any){
  return this.http.post("http://localhost:3000/adv",data);
}



}
