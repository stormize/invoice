import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ApiService} from 'src/app/api.service';
import {Observable} from 'rxjs';
import {invoice} from 'src/app/invoices'

@Component({
  selector: 'app-invoicesdetails',
  templateUrl: './invoicesdetails.component.html',
  styleUrls: ['./invoicesdetails.component.css']
})
export class InvoicesdetailsComponent implements OnInit {
   details:[] ;
   dataSource;
   id;
  constructor( private route: ActivatedRoute,private router: Router,private api : ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id =params.id;
  });
     this.api.getinvoice(this.id).subscribe(data =>{
      // console.log(this.details,data);
       this.details = data;
       console.log(data)
      });
      console.log(this.details);
      this.dataSource = this.details
  }
 deleteDetail(id){
   console.log(id)
   this.api.DeleteDetail(id);
   this.router.navigate(['/invoice',this.id]).then(() => {
    window.location.reload();
  });
 }

}
