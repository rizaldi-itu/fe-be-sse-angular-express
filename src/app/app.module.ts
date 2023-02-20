import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HelloWorldComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
