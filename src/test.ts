// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';
import { LoginComponent } from './app/components/login/login.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { AngMaterialModule } from './app/modules/ang-material/ang-material.module';
import { CandidateService } from './app/services/candidate.service';
import { DiscoverService } from './app/services/discover.service';
import { ScreeningService } from './app/services/screening.service';
import { UserService } from './app/services/user.service';
import { GatewayService } from './app/services/gateway.service';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
