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
  renewal: Renewals;
  id: number;
  renewals:Renewals[];

  constructor(private renewalService: ClientService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.renewal = this.renewalService.getRecipe(this.id);
        }
      );
  }

  onAddToRenewalListing(){
    this.renewalService.addIngredientsToShoppingList(this.renewal.renewals);
  }

  onEditRenewalListing(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    //console.log(this.renewals);
  }

  onDeleteRenewalListing(){
    this.renewalService.deletedRecipe(this.id);
    this.router.navigate(['/clients']);
  }

}
