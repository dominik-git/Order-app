import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrderModel} from '../models/order.model';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class OrderResourceServiceService {

  constructor(private firestore: AngularFirestore, public datepipe: DatePipe) {

  }

  addNewOrder(type: number){
    const ordersCollection = this.firestore.collection('orders');
    const newOrder = new OrderModel();
    newOrder.type = type;
    newOrder.examined = false;
    const seconds = Math.floor(Date.now() / 1000);

    const timestamp = {
      nanoseconds: 0,
      seconds
    };
    // const formatedDate = this.datepipe.transform(date, 'dd-mm-yyyy');
    newOrder.date = timestamp;

    ordersCollection.doc().set({...newOrder})
      .then(() => {
        console.log("Document successfully written!");
      } )
      .catch( (error) => {
        console.error("Error writing document: ", error);
      });

  }
}
