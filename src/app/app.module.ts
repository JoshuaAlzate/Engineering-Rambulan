import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/module/Material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LayoutComponent } from './layout/layout.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FundingComponent } from './pages/funding/funding.component';
import { DonateComponent } from './pages/donate/donate.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faUser, faPhoneAlt, faEnvelope, faPiggyBank, faUniversity, faMoneyBillWave, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { environment } from '../environments/environment';

import { BankService } from './service/bank.service';
import { HomeService } from './service/home.service';
import { FundingService } from './service/funding.service';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    FundingComponent,
    DonateComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [HomeService, FundingService, BankService],
  bootstrap: [LayoutComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faPhoneAlt, faEnvelope, faPiggyBank, faUniversity, faMoneyBillWave, faShoppingCart,
      faFacebook, faGooglePlus, faTwitter, faInstagram);
  }
}
