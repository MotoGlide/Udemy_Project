import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ClientService } from '../clients/client.service';
import { Renewals } from '../clients/client.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private renewalService: ClientService,
        private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getIdToken();

        return this.http.put('https://ng-recipe-book-39cac.firebaseio.com/recipes.json?auth=' + token, this.renewalService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getIdToken();

        this.http.get('https://ng-recipe-book-39cac.firebaseio.com/recipes.json?auth=' + token)
            .map(
            (response: Response) => {
                const renewals: Renewals[] = response.json();
                for (let renewal of renewals) {
                    if (!renewal['renewals']) {
                        renewal['renewals'] = [];
                    }
                }
                return renewals;
            }
            )
            .subscribe(
            (renewals: Renewals[]) => {
                this.renewalService.setRecipes(renewals);
            }
            );
    }
}