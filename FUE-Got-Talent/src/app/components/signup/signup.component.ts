import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {SpecialistsService} from '../../services/specialists.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('',Validators.required),
      // dropdown list 
      //  specialist: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );
  specialist: string="";
  constructor(private authService : AuthenticationService, private router: Router, private toast:HotToastService) { }

  ngOnInit(): void {
  }
  selectCategory (event: any) {
    //filter operation
    this.specialist = event.target.value;
  }
  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get phone() {
    return this.signUpForm.get('PhoneNumber');
  }

  submit() {
    if (!this.signUpForm.valid) {
      return; 
    }
    const {email,password,name,PhoneNumber} = this.signUpForm.value;
      this.authService.signUp2(email,password,name,PhoneNumber,this.specialist).pipe(
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading:'Signing in',
          error:  'The user is already exist !!'
          
        })
      ).subscribe(()=>{
        this.router.navigate(['/login']);
      })
    // const profileData = this.signUpForm.value;
      // this.SpecialistsService
      //   .updateUser(profileData)
      //   .pipe(
      //     this.toast.observe({
      //       loading: 'Saving profile data...',
      //       success: 'Profile updated successfully',
      //       error: 'There was an error in updating the profile',
      //     })
      //   )
      //   .subscribe();
  }
}
