import { HotToastModule } from '@ngneat/hot-toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InetialHomeComponent } from './components/inetial-home/inetial-home.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SpecialisthomeComponent } from './components/specialisthome/specialisthome.component';
import { VideoDisplayComponent } from './components/video-display/video-display.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

// const firebaseConfig = {
//   apiKey: "AIzaSyDUZovOse6Sn7Pz9b7Q3LlLAJAQG7qWKtc",
//   authDomain: "fue-got-talent-3517a.firebaseapp.com",
//   projectId: "fue-got-talent-3517a",
//   storageBucket: "fue-got-talent-3517a.appspot.com",
//   messagingSenderId: "814325652151",
//   appId: "1:814325652151:web:d619c110fa7f25850b4b32",
//   measurementId: "G-TP1ELVCVBN"
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InetialHomeComponent,
    SignupComponent,
    SpecialisthomeComponent,
    VideoDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore(),
    ),
    AngularFirestoreModule,    // provideStorage(() => getStorage()),
    RouterModule.forRoot([
      
    ])
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
