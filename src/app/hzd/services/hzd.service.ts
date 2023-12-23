import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({ providedIn: 'root' })
export class HzdService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'GRAZERS',
      basePower: 150,
    },
    {
      id: uuid(),
      name: 'SHELL-WALKERS',
      basePower: 450,
    },
    {
      id: uuid(),
      name: 'SAWTOOTHS',
      basePower: 285,
    },
  ];

  onNewCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  onDeleteId(id: string): void {
    // this.characters.splice(index, 1);
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}
