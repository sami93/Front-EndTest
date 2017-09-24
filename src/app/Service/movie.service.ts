import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../model/movie';


@Injectable()
export class MovieService {
  movies$: FirebaseListObservable<Movie[]>;

  constructor(private db: AngularFireDatabase) {
    this.movies$ = this.db.list('Movies');
  }

  getMovies() {
    return this.movies$;
  }

  saveMovie(movie: Movie) {
    this.movies$.push(movie)
      .then(_ => console.log('success'))
      .catch(error => console.log(error));
  }
}
