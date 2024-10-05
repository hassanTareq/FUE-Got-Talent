import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { specialistProfile } from 'src/app/models/specialist';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // enteredUserName='';
  // enteredPassword='';
  // username='';
  // password='';
  // onAddtext(){
  //   this.username=this.enteredUserName;
  //   this.password=this.enteredPassword;
  // }
  users:any[]=[];
  uid:string | undefined;
  loginForm =new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  constructor(private authService : AuthenticationService, private router: Router, private toast:HotToastService,private Users:HomeService) { }

  ngOnInit(): void {
    // this.Users.getAllUsers().subscribe(value=> this.users=value as [])
    // console.log(this.users)

    this.Users.getAllUsers().subscribe(data=>{
      this.users = data.map(element=>{
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as{},
          // category: element.payload.doc.data()

        }
      })
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

    submit(){
      if(!this.loginForm.valid)
      {
        return;
      }
      const {email, password} = this.loginForm.value;
      // login function 
      if(this.users.find(x=> x.email == email))
      {
        
      this.authService.login(email , password).pipe(this.toast.observe({
        success:'Logged in successfully',
        loading:'Loading....',
        error:'There was an error'
      })).subscribe(()=>{
        // if condition to check that the user is a specialist 
        this.router.navigate(['login/home']);
      })
    }
    else{
      this.toast.error("Access Denied");
    }
  }
}

