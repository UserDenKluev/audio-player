import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioConteinerComponent } from './libs/feature-audio/components/audio-conteiner/audio-conteiner.component';

const routes: Routes = [{ path: '', component: AudioConteinerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
