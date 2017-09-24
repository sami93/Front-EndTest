import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { MovieComponent } from './movie/movie.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MovieService} from './Service/movie.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


const firebaseConnectionConfig = {
  apiKey: 'AIzaSyBFjNQeo5jVf4AYXml7O9oVcyZyITEnui8',
  authDomain: 'front-endtest-aiesec-darmstadt.firebaseapp.com',
  databaseURL: 'https://front-endtest-aiesec-darmstadt.firebaseio.com',
  projectId: 'front-endtest-aiesec-darmstadt',
  storageBucket: 'front-endtest-aiesec-darmstadt.appspot.com',
  messagingSenderId: '597002102017'
};

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConnectionConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
