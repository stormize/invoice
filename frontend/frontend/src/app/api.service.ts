import { Injectable } from '@angular/core';
import { HttpClient , HttpParams,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {invoice} from 'src/app/invoices';
import { tap, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url ="http://127.0.0.1:8000/";
  getallinvoice() : Observable<invoice[]>{
  
    return this.http.get<invoice[]>(this.url)
    
    };
    getinvoice(id) : any{
     let stuff : any; ;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      
       return this.http.get<invoice[]>(this.url+'invoice/'+id+"/",httpOptions)
        
      
      ;
  }
  PostInvoice(data){
    return this.http.post(this.url,data).subscribe((data)=>{
      console.log(data);
    }); 
  }
  DeleteInvoice(id){
    
    return this.http.delete(this.url+'invoice/'+id+"/").subscribe((data)=>{
      console.log(data);
    })
  }
  UpdateInvoice(id,data){
      return this.http.put(this.url+'invoice/'+id+"/",data).subscribe((data)=>{
        console.log(data);
      }); 
  }
  getDetails(id){
    return this.http.get(this.url+'invoicedetails/'+id+"/")

  }
  updateDetails(id,data){
    console.log(data)
    return this.http.put(this.url+'invoicedetails/'+id+"/",data).subscribe((data)=>{
      console.log(data);
    })
  }
  DeleteDetail(id){
    return this.http.delete(this.url+'invoicedetails/'+id+"/").subscribe((data)=>{
      console.log(data);
    })
  }
  postDetail(data){
    return this.http.post(this.url+"invoicedetails/",data).subscribe((data)=>{
      console.log(data);
    }); 
  }

}