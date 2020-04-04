import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private fireStore: AngularFirestore) { }

  async getBankDetails() {
    const bankList = await this.fireStore.collection("Banks").get().toPromise();
    return bankList.docs.map(bankDetails => {
      const _detail = bankDetails.data();
      return {
        bankName: _detail.Name,
        recipient: _detail.Recipient,
        accountNumber: _detail.AccountNumber
      }
    });
  }
}
