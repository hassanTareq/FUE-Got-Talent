import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisthomeComponent } from './specialisthome.component';

describe('SpecialisthomeComponent', () => {
  let component: SpecialisthomeComponent;
  let fixture: ComponentFixture<SpecialisthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialisthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
