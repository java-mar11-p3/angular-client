import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AngMaterialModule } from './modules/ang-material/ang-material.module';
import { CandidateService } from './services/candidate.service';
import { DiscoverService } from './services/discover.service';
import { GatewayService } from './services/gateway.service';
import { ScreeningService } from './services/screening.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    CandidatesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CandidateService,
    DiscoverService,
    GatewayService,
    ScreeningService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
