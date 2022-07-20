import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompenseComponent } from './recompense.component';

describe('RecompenseComponent', () => {
  let component: RecompenseComponent;
  let fixture: ComponentFixture<RecompenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecompenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
