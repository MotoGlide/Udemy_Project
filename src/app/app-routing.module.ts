import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShopListComponent } from './shoplist/shoplist.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clients', loadChildren: './clients/client.module#ClientsModule' },
    { path: 'renewal-list', component: ShopListComponent },
    { path: 'tracker', component: TrackerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
