import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipebook.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}