import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeCouponComponent } from './components/home-coupon/home-coupon.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { FreshComponent } from './components/fresh/fresh.component';
import { CombosComponent } from './components/combos/combos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCouponComponent,
    CategoriesComponent,
    BestsellersComponent,
    FreshComponent,
    CombosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  exports: [CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
