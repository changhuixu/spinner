import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SpinnerModule } from '@uiowa/spinner';
import { SpinnerModule } from '../../projects/uiowa/spinner/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
