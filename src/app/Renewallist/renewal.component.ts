import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Renewal } from '../shared/renewal.model';
import { RenewalListService } from './renewal-list.service';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css']
})
export class RenewalListComponent implements OnInit, OnDestroy {
  renewals: Renewal[];
  private subscription: Subscription;

  constructor(private slService: RenewalListService) {

   }

  ngOnInit() {
    this.renewals = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe((renewals: Renewal[]) => {
        this.renewals = renewals; 
        }
    );
  }
  
  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
