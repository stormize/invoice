import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Form } from '@angular/forms';
import {ApiService} from 'src/app/api.service';
@Component({
  selector: 'app-savedetails',
  templateUrl: './savedetails.component.html',
  styleUrls: ['./savedetails.component.css']
})
export class SavedetailsComponent implements OnInit {
   id : Number;
  constructor(private route: ActivatedRoute,private router: Router, private api : ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id =params.id;
  });
  }
   detail = new FormGroup({
    item_name: new FormControl(""),
    price: new FormControl(""),
    quantity: new FormControl(""),
    total : new FormControl(""),
    
  });
  
   onSubmit(){
   let data = {
      "customer_id" : +this.id,
      "item_name": this.detail.value.item_name,
      "price": this.detail.value.price,
      "quantity": this.detail.value.quantity,
      "total" : this.detail.value.total,
      
    }
    console.log(data)
    this.api.postDetail(data);
    this.router.navigate(['/invoice',data.customer_id]).then(() => {
      window.location.reload();
    });

   }
}
