import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InetialHomeComponent } from './inetial-home.component';

describe('InetialHomeComponent', () => {
  let component: InetialHomeComponent;
  let fixture: ComponentFixture<InetialHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InetialHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InetialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
