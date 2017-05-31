import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shoplist/shoplist.component';
import { RecipeBookComponent } from './recipebook/recipebook.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipebook/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shoplist/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoplist/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipebook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipebook/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
