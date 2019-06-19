import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Form } from '@angular/forms';
import {ApiService} from 'src/app/api.service';


@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  id;
  details;
  detail :FormGroup;
  constructor(private route: ActivatedRoute,private router: Router, private api : ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id =params.id;
      this.api.getDetails(this.id).subscribe((data)=>{
         this.details = data
        this. detail = new FormGroup({
          item_name: new FormControl(this.details.item_name),
          price: new FormControl(this.details.price),
          quantity: new FormControl(this.details.quantity),
          total : new FormControl(this.details.total),
        });
      });
    });
  }
  onSubmit(){
    console.log(this.id)
    this.api.updateDetails(this.id,this.detail.value)
    this.router.navigate(['/invoice',this.details.customer_id]).then(() => {
      window.location.reload();
    });
  }
  }


