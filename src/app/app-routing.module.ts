import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RenewalListComponent } from './renewallist/renewal.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clients', loadChildren: './clients/client.module#ClientsModule' },
    { path: 'renewal-list', component: RenewalListComponent },
    { path: 'tracker', component: TrackerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
