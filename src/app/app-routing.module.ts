import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieComponent} from './movie/movie.component';

const routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Movies'
  },
  {
    path: 'Movies',
    component: MovieComponent
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
