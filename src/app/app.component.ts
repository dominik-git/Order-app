import { Component } from '@angular/core';
import {OrderResourceServiceService} from '../services/order-resource-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Order-app';

  constructor(private orderResourceServiceService: OrderResourceServiceService) {
  }

  addNewOrder(type: number){

    this.orderResourceServiceService.addNewOrder(type);
  }
}
