import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FundingService {

  constructor(private fireStore: AngularFirestore) { }

  
}
