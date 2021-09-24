import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public bitCoin: BitcoinService) {}

  ngOnInit() {}

  contador() {
    this.bitCoin.contador();
  }
}
