import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id: number;
  editMode = false;
  renewalForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private renewalService: ClientService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
      );
  }

  onSubmit() {
    // const newRecipe = new Renewals(
    //   this.renewalForm.value['name'],
    //   this.renewalForm.value['description'],
    //   this.renewalForm.value['imagePath'],
    //   this.renewalForm.value['renewals']);
    if (this.editMode) {
      this.renewalService.updateRecipe(this.id, this.renewalForm.value);
    } else {
      this.renewalService.addRecipe(this.renewalForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.renewalForm.get('renewals')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.renewalForm.get('renewals')).removeAt(index);

  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let renewalName = '';
    let renewalImagePath = '';
    let renewalDescription = '';
    let renewalList = new FormArray([]);


    if (this.editMode) {
      const renewal = this.renewalService.getRecipe(this.id);
      renewalName = renewal.name;
      renewalImagePath = renewal.imagePath;
      renewalDescription = renewal.description;
      if (renewal['renewals']) {
        for (let list of renewal.renewals) {
          renewalList.push(
            new FormGroup({
              'name': new FormControl(list.name, Validators.required),
              'amount': new FormControl(list.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.renewalForm = new FormGroup({
      'name': new FormControl(renewalName, Validators.required),
      'imagePath': new FormControl(renewalImagePath, Validators.required),
      'description': new FormControl(renewalDescription, Validators.required),
      'renewals': renewalList
    });
  }

}
