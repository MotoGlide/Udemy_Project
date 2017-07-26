import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { ClientItemComponent } from './client-list/client-item/client-item.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientStartComponent } from './client-start/client-start.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientsRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientComponent,
    ClientStartComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientDetailComponent,
    ClientItemComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClientsModule {}