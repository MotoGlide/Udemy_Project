import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './client.model';
import { Ingredient } from '../shared/ingredient.model'
import { RenewalListService } from '../renewallist/renewal-list.service'

@Injectable()
export class ClientService{
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Novae Corporation', 'Oliver Reelsen', 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Golden_star.svg', 
        [
            new Ingredient('VMware', 1),
            new Ingredient('HP SAID Renewal', 1),
            new Ingredient('Trend', 25)
        ]),
        new Recipe('Cameron Memorial Community Hospital', 'Kristopher Keen', 'https://upload.wikimedia.org/wikipedia/en/f/f4/Free_Blue_Star.jpg', 
        [
            new Ingredient('Micorsoft', 2),
            new Ingredient('Cisco SNTP', 16),
            new Ingredient('Webex', 1),
            new Ingredient('Cisco ECMU', 13),
            new Ingredient('Cisco ANYSL', 1)
        ])
    ];

    constructor(private slService: RenewalListService){}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deletedRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}