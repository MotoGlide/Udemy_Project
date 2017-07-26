import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RenewalListComponent } from './renewal.component';
import { RenewalEditComponent } from './renewal-edit/renewal-edit.component';

@NgModule({
  declarations: [
    RenewalListComponent,
    RenewalEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RenewalListModule {}