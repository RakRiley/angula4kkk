import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { HttpModule }    from '@angular/http';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    
    AppComponent,
    TestcomponentComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
