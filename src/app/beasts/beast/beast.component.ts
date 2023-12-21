import { Component } from '@angular/core';

@Component({
  selector: 'app-beast-beast',
  templateUrl: './beast.component.html',
  styleUrl: './beast.component.css',
})
export class BeastComponent {
  public name: string = 'striders';
  public age: number = 6;

  get capitalizaName(): string {
    return this.name.toUpperCase();
  }

  getBeastDescription(): string {
    return `The strider resembles a horse, and it travels in packs across the lands age: ${this.age} - ${this.name}`;
  }

  changeName(): void{
    this.name = 'WATCHERS'
  }

  changeAge(): void{
    this.age = 4;
  }

  resetValues(): void{
    this.age = 6;
    this.name = 'striders'
  }
}
