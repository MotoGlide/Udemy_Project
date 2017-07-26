import { EventEmitter } from '@angular/core';

import { Renewal } from '../shared/renewal.model';
import { Subject } from 'rxjs/Subject';

export class RenewalListService{
    ingredientsChanged = new Subject<Renewal[]>();
    startedEditing = new Subject<number>();
    private renewals: Renewal[] = [
    // new Renewal('Apples', 5),
    // new Renewal('Tomatoes', 10),
  ];

  getIngredients(){
      return this.renewals.slice();
  }

  getIngredient(index: number){
    return this.renewals[index];
  }

  addIngredient(renewal: Renewal) {
      this.renewals.push(renewal);
      this.ingredientsChanged.next(this.renewals.slice());
  }

  addIngredients(renewals: Renewal[]){
    //   for (let renewal of renewals) {
    //       this.addIngredient(renewal);
    //   }
    this.renewals.push(...renewals);
    this.ingredientsChanged.next(this.renewals.slice());
  }

  updateIngredient(index: number, newIngredient: Renewal) {
      this.renewals[index] = newIngredient;
      this.ingredientsChanged.next(this.renewals.slice());
  }

  deleteIngredient(index: number){
      this.renewals.splice(index, 1);
      this.ingredientsChanged.next(this.renewals.slice());
  }
    
}