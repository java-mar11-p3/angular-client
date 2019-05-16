import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './security/auth.guard';
import { CreateScreeningComponent } from './components/create-screening/create-screening.component'
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component'
import { AllCandidatesComponent } from './components/all-candidates/all-candidates.component'
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component'
import { UpdateScreeningComponent } from './components/update-screening/update-screening.component'
//, canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'createScreening', component: CreateScreeningComponent, canActivate: [AuthGuard] },
  { path: 'createCandidate', component: CreateCandidateComponent, canActivate: [AuthGuard] },
  { path: 'allCandidates', component: AllCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'candidateProfile', component: CandidateProfileComponent, canActivate: [AuthGuard] },
  { path: 'updateScreening', component: UpdateScreeningComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
