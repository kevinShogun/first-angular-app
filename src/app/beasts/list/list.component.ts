import { Component } from '@angular/core';

@Component({
  selector: 'app-beasts-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public beastNames: string[] = ['STRIDERS', 'WATCHERS', 'GRAZERS', 'SCRAPPERS']
  public deletedBeast?: string;

  removeLastBeast(): void{
    this.deletedBeast = this.beastNames.pop();
  }

}
