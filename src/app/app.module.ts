import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngMaterialModule } from './modules/ang-material/ang-material.module';
import { CandidateService } from './services/candidate.service';
import { DiscoverService } from './services/discover.service';
import { GatewayService } from './services/gateway.service';
import { ScreeningService } from './services/screening.service';
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
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
