import { Component, OnInit, Input } from '@angular/core';

import { ServerConnectionService } from '../../services/server-connection.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Input()productId!: number;

  buttonAppear = true;
  grades = [1, 2, 3, 4, 5];
  reviews = [
    { title: 'Poderia ser melhor.', name : 'Danrlei', grade: 4, comment: 'Achei bom, mas poderia melhorar muito com relação ao desempenho em games. A interface e navegação são boas.' },
    { title: 'Incrível', name : 'João Pedro', grade: 5, comment: 'Gostei muito.' },
    { title: 'Ah sei lá vamos ver...', name : 'Darlan', grade: 2, comment: 'qoedhwedhoweiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii ihduwheudwhieudhwieudhwiuehd iwuhediuwheiduhwiehdiweudhiwuehdiwuehdiweuhdwiuehdiwh' }

  ];

  constructor() { }

  ngOnInit(): void {

  }

  makeReview(): void {
    if (this.buttonAppear) {
      this.buttonAppear = false;
    } else {
      this.buttonAppear = true;
    }
  }

}
