import { Component, EventEmitter, Input, Output } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'hzd-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'TRAMPLERS',
      basePower: 310,
    },
  ];



  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDeleteId.emit(id);
  }
}
