import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'hzd-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    basePower: 0,
  };

  emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', basePower: 0 };
  }
}
