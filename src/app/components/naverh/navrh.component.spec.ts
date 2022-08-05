import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrhComponent } from './navrh.component';

describe('NavrhComponent', () => {
  let component: NavrhComponent;
  let fixture: ComponentFixture<NavrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
