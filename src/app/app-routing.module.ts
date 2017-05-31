import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipebook/recipebook.component';
import { ShopListComponent } from './shoplist/shoplist.component';
import { RecipeStartComponent } from './recipebook/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipebook/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeBookComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shopping-list', component: ShopListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
