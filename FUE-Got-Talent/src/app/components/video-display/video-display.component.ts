import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { cards } from 'src/app/models/posts';
import { comments } from 'src/app/models/comments';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { specialistProfile } from 'src/app/models/specialist';
import { talents } from 'src/app/models/Talents';



@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {
  card:any;
  comments: comments[]=[];
  commentForm =new FormGroup({
    comment: new FormControl('')
  });
  get comment() {
    return this.commentForm.get('comment');
  }
  
  submit()
  {
    const comment = this.commentForm.value;
    console.log(this.user.UserName)
    this.posts.addcomment(this.comment?.value, this.DocID,this.user.uid,this.user.UserName)
  }
  
  DocID:any;
  userauth:any;
  users:specialistProfile[]=[];
  user:any;
  username:any;
  talentsUsers:talents[]=[];
  talentUser: any;
  talentsEmail:any;
  Posts:cards[] = [];
  post: cards={};
  postvideo:string="";
  constructor( private authService : AuthenticationService,private activrout: ActivatedRoute, private posts:HomeService,private storeDB: AngularFirestore) { }

  ngOnInit(): void {
    
    this.activrout.params.subscribe(params => {
      this.DocID = params['DocID'];
      // console.log(this.DocID)
    });
    this.posts.getAllposts().subscribe(data=>{
      this.Posts = data.map(element=>{
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as{}
        }
      })
      this.post=this.Posts.find(x=> x.id == this.DocID)as{}
      // this.postvideo=this.post.postVideo as string;
    })
    //-------------------------------------------------------
    //get current user id
    this.userauth=this.authService.getCurrentUID();
    // console.log(this.userauth);
    //--------------------------------------------
    //get all specialist users
    this.posts.getAllUsers().subscribe(data=>{
      this.users = data.map(element=>{
        return {
          ...element.payload.doc.data() as{}
        }
      }) as []
      this.user=this.users.find(x=> x.uid == this.userauth.uid)as {}
     
    })
    //-------------------------------------------
    //get all talents users and email
    this.posts.getAllTalents().subscribe(data=>{
      this.talentsUsers = data.map(element=>{
        return {
          ...element.payload.doc.data() as{}
        }
      }) as []
      this.talentUser=this.talentsUsers.find(x=> x.uid == this.post.uid)as {}
      this.talentsEmail=this.talentUser.email;
     console.log(this.talentsEmail)
    })
    //-------------------------------------------

    //get video's comments
    this.posts.getpostComments(this.DocID).subscribe(data=>{
      this.comments = data.map(element=>{
        return {
          ...element.payload.doc.data() as{},
        }
      }) as [];
      console.log(this.comments);
    })
  }

}
