import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

import { Renewals } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy {
  recipes:Renewals[];
  subscription: Subscription;

  constructor(private recipeService: ClientService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Renewals[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
    //console.log(this.recipes);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
