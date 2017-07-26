import { Component, OnInit, Input } from '@angular/core';

import { Renewals } from '../../client.model';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {
  @Input() recipe: Renewals;
  @Input() index: number;

  ngOnInit() {
  }
}
