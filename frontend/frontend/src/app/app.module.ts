import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule ,MatCardModule,MatTreeModule,MatIconModule,MatProgressBarModule } from "@angular/material";
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesdetailsComponent } from './invoicesdetails/invoicesdetails.component';
import { SavedetailsComponent } from './savedetails/savedetails.component';
import { TestComponent } from './test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { SaveinvoiceComponent } from './saveinvoice/saveinvoice.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    InvoicesdetailsComponent,
    SavedetailsComponent,
    TestComponent,
    UpdateComponent,
    UpdatedetailsComponent,
    SaveinvoiceComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
