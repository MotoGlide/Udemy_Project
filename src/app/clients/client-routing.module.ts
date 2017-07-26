import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientStartComponent } from './client-start/client-start.component';
import { ClientComponent } from './client.component';

const recipesRoutes: Routes = [
    {
        path: '', component: ClientComponent, children: [
            { path: '', component: ClientStartComponent },
            { path: 'new', component: ClientEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: ClientDetailComponent },
            { path: ':id/edit', component: ClientEditComponent, canActivate: [AuthGuard] },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ClientsRoutingModule { }