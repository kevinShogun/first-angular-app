import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { HzdService } from '../services/hzd.service';

@Component({
  selector: 'app-hzb-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private hzdService: HzdService) {}

  get characters(): Character[] {
    return [...this.hzdService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.hzdService.onDeleteId(id);
  }

  onNewCharacter(character: Character): void{
    this.hzdService.onNewCharacter(character);
  }
}
