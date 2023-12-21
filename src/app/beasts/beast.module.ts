import { NgModule } from '@angular/core';
import { BeastComponent } from './beast/beast.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BeastComponent, ListComponent],
  imports: [CommonModule],
  exports: [BeastComponent, ListComponent],
})
export class BeastModule {}
