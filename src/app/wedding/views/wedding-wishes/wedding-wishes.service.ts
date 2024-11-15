import {inject, Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  DocumentReference,
  DocumentData,
  query,
  orderBy,
  collectionData
} from "@angular/fire/firestore";
import {APP_CONSTANTS} from "@/shared/constants";
import {WeddingWishes} from "@/wedding/views/wedding-wishes/wedding-wishes.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeddingWishesService {

  private readonly _firestore = inject(Firestore);
  private readonly _weddingCollection = collection( this._firestore, APP_CONSTANTS.COLLECT_NAME)

  constructor() { }

  newMessage( weddingWishes: Partial<WeddingWishes>): Promise<DocumentReference<DocumentData, DocumentData>> {
    return addDoc( this._weddingCollection, {
      created: Date.now(),
      ...weddingWishes,
    });
  }

  getAllMessages(): Observable<WeddingWishes[]> {
    const queryFn = query(this._weddingCollection, orderBy('created', 'desc'));
    return collectionData( queryFn, {idField: 'id'}) as Observable<WeddingWishes[]>;
  }
}
