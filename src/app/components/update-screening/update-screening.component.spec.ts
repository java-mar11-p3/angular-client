import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScreeningComponent } from './update-screening.component';

describe('UpdateScreeningComponent', () => {
  let component: UpdateScreeningComponent;
  let fixture: ComponentFixture<UpdateScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
