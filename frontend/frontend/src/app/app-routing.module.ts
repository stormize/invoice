import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesdetailsComponent } from './invoicesdetails/invoicesdetails.component';
import {UpdateComponent} from 'src/app/update/update.component';
import {UpdatedetailsComponent} from 'src/app/updatedetails/updatedetails.component';
import {SaveinvoiceComponent} from 'src/app/saveinvoice/saveinvoice.component';
import {SavedetailsComponent} from 'src/app/savedetails/savedetails.component'
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: 'invoices', component: ApiComponent ,  pathMatch: 'full'},
  { path: 'invoice/:id',      component: InvoicesdetailsComponent ,  pathMatch: 'full'},
  { path: 'invoiceupdate/:id',      component: UpdateComponent ,  pathMatch: 'full'},
  { path: 'detailupdate/:id', component:UpdatedetailsComponent, pathMatch: 'full'},
  { path: 'saveinvoice', component:SaveinvoiceComponent, pathMatch: 'full'},
  { path: 'savedetail/:id', component:SavedetailsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
