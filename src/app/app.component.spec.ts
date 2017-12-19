import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {KothMaterialModule} from './koth-material/koth-material.module';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { SigninComponent } from './signin/signin.component';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {APP_BASE_HREF} from '@angular/common';

import { GameComponent } from './game/game.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const firebaseConfig = {
      apiKey: "",
      authDomain: "koth-edosoft.firebaseapp.com",
      databaseURL: "https://koth-edosoft.firebaseio.com",
      projectId: "koth-edosoft",
      storageBucket: "koth-edosoft.appspot.com",
      messagingSenderId: ""
};
  TestBed.configureTestingModule({
    imports: [ KothMaterialModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), AngularFireAuthModule,
      AngularFireDatabaseModule,
      RouterModule.forRoot(appRoutes, {enableTracing: true})
],
      declarations: [
        AppComponent,
        LoginComponent,
        ScoreComponent,
        SigninComponent,
        GameComponent
      ],
      providers: [AuthService, AngularFireAuth,  {provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('King of the Hill Game');
  });
  it('should render title in a element with id=title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('King of the Hill Game');
  });
});
