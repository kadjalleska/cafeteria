import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { ContatoPage } from './contato';

@NgModule({
  declarations: [
    ContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatoPage),
  ],
})
export class ContatoPageModule {
  
}
