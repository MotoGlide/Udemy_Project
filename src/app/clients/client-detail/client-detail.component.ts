import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Renewals } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  recipe: Renewals;
  id: number;
  recipes:Renewals[];

  constructor(private recipeService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.renewals);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    //console.log(this.recipes);
  }

  onDeleteRecipe(){
    this.recipeService.deletedRecipe(this.id);
    this.router.navigate(['/clients']);
  }

}
