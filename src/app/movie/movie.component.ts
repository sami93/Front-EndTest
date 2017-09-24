import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/map';
import {FirebaseListObservable} from 'angularfire2/database';
import {MovieService} from '../Service/movie.service';
import {Movie} from '../model/movie';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies$: FirebaseListObservable<Movie[]>;
  movies: Movie[];
  selectedRow: any;
  addMovie: FormGroup;
  title = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  actor = new FormControl('', Validators.required);
  year = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder,
              private http: Http,
              private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getMovies();
    this.addMovie = this.formBuilder.group({
      title: this.title,
      description: this.description,
      actor: this.actor,
      year: this.year,
    });
  }


  getMovies() {
    this.movies$ = this.movieService.getMovies();

  }

  addDataSet() {
    this.movieService.saveMovie(this.addMovie.value);
    console.log('success');
  }

}
