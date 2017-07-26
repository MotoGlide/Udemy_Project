import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Renewals } from './client.model';
import { Renewal } from '../shared/renewal.model'
import { RenewalListService } from '../renewallist/renewal-list.service'

@Injectable()
export class ClientService{
    recipesChanged = new Subject<Renewals[]>();

    private recipes: Renewals[] = [
        new Renewals('Novae Corporation', 'Oliver Reelsen', 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Golden_star.svg', 
        [
            new Renewal('VMware', 1),
            new Renewal('HP SAID Renewal', 1),
            new Renewal('Trend', 25)
        ]),
        new Renewals('Cameron Memorial Community Hospital', 'Kristopher Keen', 'https://upload.wikimedia.org/wikipedia/en/f/f4/Free_Blue_Star.jpg', 
        [
            new Renewal('Micorsoft', 2),
            new Renewal('Cisco SNTP', 16),
            new Renewal('Webex', 1),
            new Renewal('Cisco ECMU', 13),
            new Renewal('Cisco ANYSL', 1)
        ])
    ];

    constructor(private slService: RenewalListService){}

    setRecipes(recipes: Renewals[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(renewals: Renewal[]){
        this.slService.addIngredients(renewals);
    }

    addRecipe(recipe: Renewals){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Renewals){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deletedRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}