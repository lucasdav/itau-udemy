import { Component, OnInit } from '@angular/core';
import { slide, sliderAnimations } from '../animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    slide,
    sliderAnimations
  ]
})
export class SliderComponent implements OnInit {

  items: any[] = [
    'honda',
    'toyota',
    'bmw'
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
