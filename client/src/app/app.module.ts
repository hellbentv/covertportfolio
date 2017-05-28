import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { AppComponent }    from './app.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { FormsModule }     from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ AppComponent, StocksComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
