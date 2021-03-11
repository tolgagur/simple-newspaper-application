import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportnewComponent } from './sportnew.component';

describe('SportnewComponent', () => {
  let component: SportnewComponent;
  let fixture: ComponentFixture<SportnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
