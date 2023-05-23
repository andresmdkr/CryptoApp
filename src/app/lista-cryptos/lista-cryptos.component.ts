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
        "precio": 27181.51,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
        "industria": "Store Of Value",
        "plataforma": "Bitcoin Ecosystem",
        "marketcap": 526571946234

    },
    {
        "id": 2,
        "name": "Ethereum",
        "precio": 1850.11,
        "logo_url": "https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png",
        "industria": "Bitcoin",
        "plataforma": "Ethereum Ecosystem",
        "marketcap": 222457022727
    },
    {
        "id": 3,
        "name": "Shiba Inu SHIB",
        "precio": 1.5,
        "logo_url": "https://w7.pngwing.com/pngs/929/384/png-transparent-shib-coin-shib-coin-logo-shiba-token-thumbnail.png",
        "industria": "Meme",
        "plataforma": "Ethereum Ecosystem",
        "marketcap": 200000000
    },
    {
        "id": 4,
        "name": "Litecoin",
        "precio": 150,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png",
        "industria": "Bitcoin",
        "plataforma": "Bitcoin",
        "marketcap": 100000000
    },
    {
        "id": 5,
        "name": "Dai DAI",
        "precio": 0.9997,
        "logo_url": "https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png",
        "industria": "Bitcoin",
        "plataforma": "Ethereum Ecosystem",
        "marketcap": 4843138694
    },
    {
        "id": 6,
        "name": "Binance Coin",
        "precio": 350,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
        "industria": "Bitcoin",
        "plataforma": "Bitcoin",
        "marketcap": 80000000
    },
    {
        "id": 7,
        "name": "Polkadot",
        "precio": 40,
        "logo_url": "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
        "industria": "Bitcoin",
        "plataforma": "Bitcoin",
        "marketcap": 60000000
    },
    {
        "id": 8,
        "name": "Chainlink",
        "precio": 30,
        "logo_url": "https://cryptologos.cc/logos/chainlink-link-logo.png",
        "industria": "Bitcoin",
        "plataforma": "Bitcoin",
        "marketcap": 40000000
    },
    {
        "id": 9,
        "name": "Stellar",
        "precio": 0.5,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png",
        "industria": "Bitcoin",
        "plataforma": "Bitcoin",
        "marketcap": 30000000
    },
    {
        "id": 10,
        "name": "Dogecoin",
        "precio": 0.3,
        "logo_url": "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
        "industria": "Bitcoin",
        "plataforma": "Bitcoin",
        "marketcap": 20000000
    }
]

  filtromarketcap: number = 0;
  filtroprecio: number = 0;
  filtropPlataforma: string = "";
  filtropIndustria: string = "";
  cryptosFiltradas: any[] = [];
  mostrarMensajeNoCoincidencias: boolean = false;

  ngOnInit() {
    this.aplicarFiltro();
  }

  aplicarFiltro() {
    this.cryptosFiltradas = this.cryptos.filter(crypto => {
      const pasaFiltroPlataforma = this.filtropPlataforma === "" || crypto.plataforma === this.filtropPlataforma;
      const pasaFiltroIndustria = this.filtropIndustria === "" || crypto.industria === this.filtropIndustria;
      return pasaFiltroPlataforma && pasaFiltroIndustria;
    });

    this.mostrarMensajeNoCoincidencias = this.cryptosFiltradas.length === 0;
  }
}
