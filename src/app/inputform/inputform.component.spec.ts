import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputformComponent } from './inputform.component';

describe('InputformComponent', () => {
  let component: InputformComponent;
  let fixture: ComponentFixture<InputformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputformComponent]
    });
    fixture = TestBed.createComponent(InputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
