import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminComponent } from './card.component';

describe('CardAdminComponent', () => {
  let component: CardAdminComponent;
  let fixture: ComponentFixture<CardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
