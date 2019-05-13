import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScreeningComponent } from './create-screening.component';

describe('CreateScreeningComponent', () => {
  let component: CreateScreeningComponent;
  let fixture: ComponentFixture<CreateScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
