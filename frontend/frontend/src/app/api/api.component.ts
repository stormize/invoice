import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';
import {Observable} from 'rxjs';
import {invoice} from 'src/app/invoices'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,private router: Router ,private api:ApiService) { }
  invoices : Observable<invoice[]> ;
  dataSource;
  ngOnInit() {
    this.getallinvoice()
    this.dataSource = this.invoices;
    console.log(this.dataSource)
  }
  public getallinvoice(){
   this.invoices=  this.api.getallinvoice();
   
   
  }
  displayedColumns: string[] = ['id', 'customer_name', 'date', 'address','total_invoice'];
  ClickDelete(id){
    if (this.api.DeleteInvoice(id)){
      this.router.navigate(['/invoices']);
    }
  }
}
