import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
