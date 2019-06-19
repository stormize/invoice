import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ApiService} from 'src/app/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 id;
 details;
 invoice : FormGroup;
  constructor(private route: ActivatedRoute,private router: Router, private api : ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id =params.id;
    this.api.getinvoice(this.id).subscribe((data)=>{
       this.details = data
      this. invoice = new FormGroup({
        customer_name: new FormControl(this.details.customer_name),
        address: new FormControl(this.details.address),
        total_invoice: new FormControl(this.details.total_invoice),
        date : new FormControl({value:'',disabled: true}),
      });
    });
  });
  }
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
     console.log(this.invoice.value);
    this.api.UpdateInvoice(this.id,this.invoice.value)
    this.router.navigate(['/invoices']).then(() => {
      window.location.reload();
    });
  }
}
