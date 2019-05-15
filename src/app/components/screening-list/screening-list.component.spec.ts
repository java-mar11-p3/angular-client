import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningListComponent } from './screening-list.component';
import { AngMaterialModule } from 'src/app/modules/ang-material/ang-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';

describe('CandidatesComponent', () => {
  let component: ScreeningListComponent;
  let fixture: ComponentFixture<ScreeningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
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
    fixture = TestBed.createComponent(ScreeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
