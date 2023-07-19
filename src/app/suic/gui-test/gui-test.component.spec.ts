import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiTestComponent } from './gui-test.component';

describe('GuiTestComponent', () => {
  let component: GuiTestComponent;
  let fixture: ComponentFixture<GuiTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiTestComponent]
    });
    fixture = TestBed.createComponent(GuiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
