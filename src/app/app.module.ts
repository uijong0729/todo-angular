import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module'
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './component/config/config.component';
import { HomeComponent } from './component/home/home.component';
import { TodoComponent } from './component/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HomeComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
