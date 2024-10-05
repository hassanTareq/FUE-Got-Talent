import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private storeDB: AngularFirestore) { }
  Comments:comments | undefined
  getAllposts(){
    return this.storeDB.collection('posts').snapshotChanges()
  }

  getpostComments(DocID: any){
    return this.storeDB.collection('posts').doc(DocID).collection('comments').snapshotChanges()
  }
  
  addcomment(comment:any,DocID: any,userID:any,Username:any){
    // const current = new Date();
    // const timestamp = current.getTime();
    this.Comments={
      image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
      text:comment,
      //get system time as timeStamp
      dateTime:new Date(Date.now()),
      name:Username,
      uId:userID
    }
    this.storeDB.collection('posts').doc(DocID).collection('comments').add(this.Comments)
  }
  
  getAllUsers(){
    return this.storeDB.collection('Specialist').snapshotChanges()
  }
  getAllTalents(){
    return this.storeDB.collection('users').snapshotChanges()
  }
  // getAllpostsID(){
  //   return this.storeDB.collection('posts').doc().valueChanges()
  // }
  
}
