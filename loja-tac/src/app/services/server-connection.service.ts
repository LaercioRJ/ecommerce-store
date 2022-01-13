import { Injectable } from '@angular/core';

import { Product } from '../classes/product';
import { Review } from '../classes/Review';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  private products: Product[] = [
      { id: 1, name: 'xbox one s - all digital', description: 'Um xbox one S com toda sua capacidade multimídia, gráfica e ' +
    ' de processamento, sem a capacidade para discos.', stock: 5, price: 1299.99, picture: '../../assets/xbox.jpg' },
    { id: 2, name: 'Ps4 Pro ', description: 'Preto.', stock: 15, price: 4299.99, picture: '../../assets/ps4_pro.jpg'},
    { id: 3, name: 'Controle Ps4', description: 'Controle + cabo USB.', stock: 10, price: 199.99,
      picture: '../../assets/controlePs4pro.jpg'},
      { id: 4, name: 'Samsung J7', description: 'Galaxy j7, celular para jogos.', stock: 5, price: 3499.99,
       picture: '../../assets/j7.jpg' },
    { id: 5, name: 'Controle sem fio para WII', description: 'Um controle revolucionário que permite o usuário manipular' +
    ' o jogo com seus movimentos.', stock: 3, price: 99.99, picture: '../../assets/controleWii.jpg' },
    { id: 6, name: 'Controle Game Cube', description: 'Um controle simples, porém bem ergonômico.',
    stock: 3, price: 99.99, picture: '../../assets/controleGC.jpg' },
    {  id: 7, name: 'Monitor 23,8',
      description: 'Monitor LG 23.8 " Full HD, LED, IPS, FreeSync, HDMI, VGA 	24MP400-B PretoCaracterísticas-Modelo: 24MP400-B-Tamanho de Tela: 24"-	Tipo de Tela: IPS-Brilho 200 cd/m²-Resolução Máxima 1920x1080-Contraste 	Mín. 600:1-Suporte de Cores 16,7 Milhões de cores-Tempo de Resposta',
      stock: 10,
      price: 873.27,
      picture: '../../assets/monitor23.jpg'
    },
    { id: 8, name: 'Smart TV LG 75',
      description: 'Qualidade de imagem realista e cores vivas em 4K' + '. Tenha uma experiência imersiva cinematográfica. ' +
        ' Todos os seus apps favoritos em um só lugar. ' +
        ' Jogabilidade mais rápida e envolvente. ' +
        ' Design que melhora o visual da sua sala ',
      stock: 7,
      price: 5849.10,
      picture: '../../assets/tv75.jpg'
    },
    {
      id: 9, name: 'Apple iPad mini',
      description: 'Apple iPad mini 4G-Cellular Tela 8" 64GB PrataFabricanteApple Computer BrasilTipo de TelaRetina Display; Resolução de 2048 x 1536 pixelsCaracterísticas- Bluetooth: Sim- Entradas: Lightning e Audio de 3,5 mm- Câmera Traseira: 8.1MP',
      stock: 5,
      price: 3599.10,
      picture: '../../assets/ipad.png'
    },
    {
      id: 10, name: 'Notebook LG Intel Core i7',
      description: '- Tela de 16" com cores fiéis de qualquer ângulo. ' +
      ' Um notebook extremamente tecnológico. ' +
      ' O design mais leve do mundo. ' +
      ' Estrutura com resistência militar. ' +
      ' Bateria com até 22 horas de duração',
      stock: 10,
      price: 8099.10,
      picture: '../../assets/note.jpg'
    },
    {
      id: 11, name: 'Smartwatch Galaxy',
      description: 'Smartwatch Samsung Galaxy Watch4 Classic BT 42mm PretoFeatures Principais:- Novo sistema operacional Wear OS Powered by Samsung - Variedade de Apps, incluindo Apps do Serviço Google: Play Store, Google Map, G Pay, G Assistant e YouTube Music.',
      stock: 6,
      price: 1798.20,
      picture: '../../assets/relogio.png'
    }
  ];

  private reviews: Review[] = [];

  constructor() { }

  getAllProducts(): Product[] {
    const productsReturn: Product[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id !== -1) {
        productsReturn.push(this.products[i]);
      }
    }
    return this.products;
  }

  getProductById(productId: number): Product {
    return this.products[productId - 1];
  }

  updateProduct(updatedproduct: Product, productId: number): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        this.products[i] = updatedproduct;
      }
    }
  }

  deleteProduct(productId: number): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        this.products.splice(i, 1);
      }
    }
  }

  createProduct(newProduct: Product): void {
    newProduct.id = this.products.length + 1;
    this.products.push(newProduct);
  }

}
