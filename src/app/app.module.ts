import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, NavbarComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService],
})
export class AppModule {}