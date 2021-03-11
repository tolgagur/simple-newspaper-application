import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnewComponent } from './technew.component';

describe('TechnewComponent', () => {
  let component: TechnewComponent;
  let fixture: ComponentFixture<TechnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
