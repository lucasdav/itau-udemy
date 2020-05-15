import { trigger, state, style, transition, animate, query } from '@angular/animations';

export let sliderAnimations = trigger('sliderAnimations', [

  transition(':enter', [
    query('h1', [
      style({ transform: 'translateY(-20px)' }),
      animate(1000)
    ])
  ]),
]);


export let slide = trigger('slide', [

  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500)
  ]),

  transition(':leave', [
    animate(500, style({ transform: 'translateX(-100%)'}))
  ])
]);

export let fade = trigger('fade', [

  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [
    animate(2000)
  ])
]);
