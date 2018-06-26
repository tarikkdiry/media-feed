import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Material
import { MaterialModule } from '@angular/material';

// Routes
// import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeCardComponent } from './home-card/home-card.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(ROUTES),
    MaterialModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
