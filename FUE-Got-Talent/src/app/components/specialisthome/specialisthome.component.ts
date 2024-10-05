import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs-compat';
import { cards } from 'src/app/models/posts';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-specialisthome',
  templateUrl: './specialisthome.component.html',
  styleUrls: ['./specialisthome.component.css']
})


export class SpecialisthomeComponent implements OnInit {
  // user$= this.authService.currentUser$;
  link=""
  // videos: Array<{id: number, src: string}> = [
  //   { 
  //     id: 1,
  //     src: "../../../assets/images/nature.jpg" 
  //   },
  //   { 
  //     id: 2,
  //     src: "../../../assets/images/nature.jpg" 
  //   },
  //   { 
  //     id: 3,
  //     src: "../../../assets/images/nature.jpg" 
  //   },
  //   { 
  //     id: 4,
  //     src: "../../../assets/images/nature.jpg" 
  //   },
    
  // ];
 

  Posts: cards[] = [];// will hold the list of posts
  PostsCopy: cards[] = [];// will hold the list of posts
  selectedCategory: string="";
  uid:string="";
  // Postsid: any[] = [];// will hold the list of posts
  constructor(private posts:HomeService, private activrout: ActivatedRoute) {}

  ngOnInit()  {
    this.posts.getAllposts().subscribe(data=>{
      this.Posts = data.map(element=>{
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as{},
          // category: element.payload.doc.data()

        }
      })
      console.log(this.Posts)
      this.PostsCopy=this.Posts
    })

  }
  selectCategory (event: any) {
    //filter operation
    this.selectedCategory = event.target.value;
    if(this.selectedCategory != "All"){
    this.Posts=this.PostsCopy.filter(x=> x.category == this.selectedCategory)as []
    }
    else
    this.Posts=this.PostsCopy
  }


}
// private authService:AuthenticationService
//FireDB:AngularFireDatabase