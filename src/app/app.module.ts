import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { LojasPage } from '../pages/lojas/lojas';
import { ContatoPage } from '../pages/contato/contato';
import { MensagemPage } from '../pages/mensagem/mensagem';

@NgModule({
  declarations: [
    MyApp,
    CardapioPage,
    LojasPage,
    ContatoPage,
    MensagemPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardapioPage,
    LojasPage,
    ContatoPage,
    MensagemPage,
    TabsPage
,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
