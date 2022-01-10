import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

// Project components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Custom Pipeline
import {AppRoutes} from "./app.routes";
import { ProductModule } from './products/product.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
