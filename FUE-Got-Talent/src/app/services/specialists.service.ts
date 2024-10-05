import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { specialistProfile } from '../models/specialist';
@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  constructor( private firestore: AngularFirestore ) { }
  // addSpecialist(user: specialistProfile): Observable<any>{
  //   const ref= docChanges(this.firestore,'specialist',)
  // }
}
