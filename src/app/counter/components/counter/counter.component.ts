import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h4> Counter: {{ counter }} </h4>
        <br/>
        <button (click)="increaseBy(+1)"> + 1 </button>
        <button (click)="resetValue()">Reset</button>
        <button (click)="increaseBy(-1)"> - 1 </button>
    `
})

export class CounterComponent {
    counter = 30 // esta es otra forma de definir propiedades

    increaseBy(value:number):void{
      this.counter += value 
    }
  
    resetValue(){
      this.counter = 30
    }
    constructor() { }
}