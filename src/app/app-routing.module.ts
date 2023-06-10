import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicPlayerComponent } from './music-player/music-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music-player', component: MusicPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
