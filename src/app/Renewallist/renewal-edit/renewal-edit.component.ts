import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Renewal } from '../../shared/renewal.model';
import { RenewalListService } from '../renewal-list.service';

@Component({
  selector: 'app-renewal-edit',
  templateUrl: './renewal-edit.component.html',
  styleUrls: ['./renewal-edit.component.css']
})
export class RenewalEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Renewal;

  constructor(private slService: RenewalListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Renewal(value.name, value.amount);
    if (this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

