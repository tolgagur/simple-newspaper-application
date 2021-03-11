import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewComponent } from './technew/technew.component';
import { SportnewComponent } from './sportnew/sportnew.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewComponent,
    SportnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
