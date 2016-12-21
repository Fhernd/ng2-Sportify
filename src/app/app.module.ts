import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule, 
  Routes
} from '@angular/router';
import {
  LocationStrategy, 
  HashLocationStrategy, 
  APP_BASE_HREF
} from '@angular/common';

import { AppComponent } from './app.component';
import {
  AlbumComponent
} from './components/AlbumComponent';
import {
  ArtistComponent
} from './components/ArtistComponent';
import {
  SearchComponent
} from './components/SearchComponent';
import {
  TrackComponent
} from './components/TrackComponent';

import {
  SPOTIFY_PROVIDERS
} from './services/SpotifyService';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];

@NgModule({
  declarations: [
    AppComponent, 
    AlbumComponent, 
    ArtistComponent, 
    SearchComponent, 
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [
    SPOTIFY_PROVIDERS, 
    {provide: APP_BASE_HREF, useValue: '/'}, 
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
