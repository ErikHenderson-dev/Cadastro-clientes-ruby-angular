import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { PageBlockComponent } from './page-block/page-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    MenuComponent,
    PageBlockComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    MenuComponent,
    PageBlockComponent,
    FormsModule,
    ReactiveFormsModule,
    TableFilterPipe,
    NgSelectModule
  ],
  providers: [
    TableFilterPipe
  ]
})

export class SharedModule {}
