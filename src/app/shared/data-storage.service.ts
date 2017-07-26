import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ClientService } from '../clients/client.service';
import { Recipe } from '../clients/client.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: ClientService,
        private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getIdToken();

        return this.http.put('https://ng-recipe-book-39cac.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getIdToken();

        this.http.get('https://ng-recipe-book-39cac.firebaseio.com/recipes.json?auth=' + token)
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
            );
    }
}