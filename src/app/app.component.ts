import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'renewal';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBs3H4epr9mbJGa5INqpkWr5YS5G3hL87U",
      authDomain: "ng-recipe-book-39cac.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}

