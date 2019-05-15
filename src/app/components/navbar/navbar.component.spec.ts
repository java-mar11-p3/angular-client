import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from 'src/app/modules/ang-material/ang-material.module';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';
import { ScreeningListComponent } from '../screening-list/screening-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        SearchComponent,
        ScreeningListComponent
      ],
      imports: [
        AngMaterialModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
