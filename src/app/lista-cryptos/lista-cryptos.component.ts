import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cryptos',
  templateUrl: './lista-cryptos.component.html',
  styleUrls: ['./lista-cryptos.component.css']
})
export class ListacryptosComponent implements OnInit {
 cryptos = [
    {
        "id": 1,
        "name": "Bitcoin",
        "precio": 50000,
        "logo_url": "https://example.com/bitcoin_logo.png",
        "marketcap": 1000000000
    },
    {
        "id": 2,
        "name": "Ethereum",
        "precio": 2500,
        "logo_url": "https://example.com/ethereum_logo.png",
        "marketcap": 500000000
    },
    {
        "id": 3,
        "name": "Ripple",
        "precio": 1.5,
        "logo_url": "https://example.com/ripple_logo.png",
        "marketcap": 200000000
    },
    {
        "id": 4,
        "name": "Litecoin",
        "precio": 150,
        "logo_url": "https://example.com/litecoin_logo.png",
        "marketcap": 100000000
    },
    {
        "id": 5,
        "name": "Cardano",
        "precio": 2.0,
        "logo_url": "https://example.com/cardano_logo.png",
        "marketcap": 150000000
    },
    {
        "id": 6,
        "name": "Binance Coin",
        "precio": 350,
        "logo_url": "https://example.com/binance_coin_logo.png",
        "marketcap": 80000000
    },
    {
        "id": 7,
        "name": "Polkadot",
        "precio": 40,
        "logo_url": "https://example.com/polkadot_logo.png",
        "marketcap": 60000000
    },
    {
        "id": 8,
        "name": "Chainlink",
        "precio": 30,
        "logo_url": "https://example.com/chainlink_logo.png",
        "marketcap": 40000000
    },
    {
        "id": 9,
        "name": "Stellar",
        "precio": 0.5,
        "logo_url": "https://example.com/stellar_logo.png",
        "marketcap": 30000000
    },
    {
        "id": 10,
        "name": "Dogecoin",
        "precio": 0.3,
        "logo_url": "https://example.com/dogecoin_logo.png",
        "marketcap": 20000000
    }
]


  filtromarketcap: number =0;
  filtroprecio: number =0;
  cryptosFiltradas: any[] = [];
  mostrarMensajeNoCoincidencias: boolean = false;

  ngOnInit() {
    this.aplicarFiltro();
  }

 aplicarFiltro() {
  this.cryptosFiltradas = this.cryptos.filter(crypto => {
    const cumpleFiltroprecio = this.filtroprecio === 0 || crypto.precio === this.filtroprecio;
    const cumpleFiltromarketcap = this.filtromarketcap === 0 || crypto.marketcap === this.filtromarketcap;


    return cumpleFiltroprecio && cumpleFiltromarketcap;
  });
   this.mostrarMensajeNoCoincidencias = this.cryptosFiltradas.length === 0;
}

}
