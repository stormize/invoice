import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ApiService} from 'src/app/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-saveinvoice',
  templateUrl: './saveinvoice.component.html',
  styleUrls: ['./saveinvoice.component.css']
})
export class SaveinvoiceComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router, private api : ApiService) { }

  ngOnInit() {
  }
   invoice = new FormGroup({
    customer_name: new FormControl(""),
    address: new FormControl(""),
    total_invoice: new FormControl(""),
    date : new FormControl(""),
  });
  onSubmit(){
    console.log(this.invoice.value);
    this.api.PostInvoice(this.invoice.value);
    this.router.navigate(['/invoices']);
  }
}
