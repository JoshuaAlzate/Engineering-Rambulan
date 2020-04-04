import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private fireStore: AngularFirestore) { }

  async getTransaction() {
    const transactionList = await this.fireStore.collection("Transaction").get().toPromise();
    return transactionList.docs.map(transactionDetail => transactionDetail.data());
  }

}
