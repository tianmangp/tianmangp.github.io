import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventTimelineComponent } from './event-timeline/event-timeline.component';

import { HomeComponent } from './public/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FollowAlmComponent } from './follow-alm/follow-alm.component';
import { ImgCarouselComponent } from './img-carousel/img-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuotesComponent } from './quotes/quotes.component';
import { ShopAlmComponent } from './shop-alm/shop-alm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventTimelineComponent,
    FollowAlmComponent,
    ImgCarouselComponent,
    QuotesComponent,
    ShopAlmComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
