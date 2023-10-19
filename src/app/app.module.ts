import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ViewShoeComponent } from './components/view-shoe/view-shoe.component';
import { ShoesListModule } from './components/shoes-list/shoes-list.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewShoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
