import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/components/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/components/list-titles/list-titles.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TitleComponent } from './shared/components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
