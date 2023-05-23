import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListacryptosComponent } from './lista-cryptos/lista-cryptos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListacryptosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
