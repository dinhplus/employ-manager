import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './employes/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployDetailComponent } from './employes/employ-detail/employ-detail.component';
import { EmployListComponent } from './employes/employ-list/employ-list.component';
import { EmployRatingComponent } from './employes/employ-rating/employ-rating.component';
import { EmployStockComponent } from './employes/employ-stock/employ-stock.component';
import { TopBarComponent } from './employes/top-bar/top-bar.component';

import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { EmployesComponent } from './employes/employes.component';
import { UserComponent } from './user/user.component';
import { EmployesModule } from './employes/employes.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployDetailComponent,
    EmployListComponent,
    EmployRatingComponent,
    EmployStockComponent,
    TopBarComponent,
    SigninComponent,
    SignupComponent,
    EmployesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,

    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),

    EmployesModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
