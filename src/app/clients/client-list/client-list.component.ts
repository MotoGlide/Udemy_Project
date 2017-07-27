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
  renewals:Renewals[];
  subscription: Subscription;

  constructor(private renewalService: ClientService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.renewalService.recipesChanged
      .subscribe(
        (renewals: Renewals[]) => {
          this.renewals = renewals;
        }
      );
    this.renewals = this.renewalService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
    //console.log(this.renewals);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
