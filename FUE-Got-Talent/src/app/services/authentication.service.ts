import { Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword,  UserCredential, authState, signInWithEmailAndPassword,} from '@angular/fire/auth';
import { getAuth, updateProfile } from 'firebase/auth';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { specialistProfile } from '../models/specialist';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {  
  currentUser$ = authState(this.auth);
  constructor(private auth: Auth,private storeDB: AngularFirestore) { }
  specialistModel:specialistProfile | undefined;
  // signUp(email: string, password: string):Observable<UserCredential>{
  //   return from(createUserWithEmailAndPassword(this.auth, email, password))
  // }
  signUp2(email: string, password: string,name:string,PhoneNumber:string,specialist:string){
    return from(createUserWithEmailAndPassword(this.auth, email, password).then((value)=>{
      this.specialistModel={
      uid: value.user.uid,
      UserName: name,
      phone: PhoneNumber,
      email: value.user.email as string,
      speciality: specialist,
      }
      this.storeDB.collection('Specialist').doc(value.user.uid).set(this.specialistModel);
    }))
  }

  getCurrentUID(){
    const auth = getAuth();
    const user = auth.currentUser;
    return user;
  }

  
  login(email:string, password: string):Observable<any>{
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(): Observable<any>{
    return from(this.auth.signOut());
  }
}




