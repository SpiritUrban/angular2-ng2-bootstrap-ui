import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { BrowserModule }      from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }       from './app.component';
import { HttpModule }         from '@angular/http';

import { my_header }         from './components/my_header/my_header.component';


@NgModule({
  declarations: [AppComponent, my_header],
  imports: [

    HttpModule,
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}