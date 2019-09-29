import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carusel-portfolio',
  templateUrl: './carusel-portfolio.component.html',
  styleUrls: ['./carusel-portfolio.component.css'],
  providers: [NgbCarouselConfig]
})
export class CaruselPortfolioComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
