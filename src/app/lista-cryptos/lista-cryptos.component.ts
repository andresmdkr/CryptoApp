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
        "precio": 0.000008902,
        "logo_url": "https://w7.pngwing.com/pngs/929/384/png-transparent-shib-coin-shib-coin-logo-shiba-token-thumbnail.png",
        "industria": "Meme",
        "plataforma": "Ethereum Ecosystem",
        "marketcap": 5246151673
    },
    {
        "id": 4,
        "name": "Litecoin",
        "precio": 90.86,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png",
        "industria": "Medium of Exchange",
        "plataforma": "Bitcoin Ecosystem",
        "marketcap": 6631340428


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
        "precio": 0.9999,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
        "industria": "Stablecoin",
        "plataforma": "Binance Chain",
        "marketcap": 5461071902

    },
    {
        "id": 7,
        "name": "Polkadot",
        "precio": 5.39,
        "logo_url": "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
        "industria": "Web3",
        "plataforma": "Polkadot Ecosystem",
        "marketcap": 6391019844
    },
    {
        "id": 8,
        "name": "Chainlink",
        "precio": 6.53,
        "logo_url": "https://cryptologos.cc/logos/chainlink-link-logo.png",
        "industria": "Web3",
        "plataforma": "Polkadot Ecosystem",
        "marketcap": 3374910269

    },
    {
        "id": 9,
        "name": "Stellar",
        "precio": 0.08807,
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png",
        "industria": "Medium of Exchange",
        "plataforma": "Bitcoin Ecosystem",
        "marketcap": 2360222062
    },
    {
        "id": 10,
        "name": "Dogecoin",
        "precio": 0.07274,
        "logo_url": "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
        "industria": "Meme",
        "plataforma": "Binance Chain",
        "marketcap":10144381700


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
