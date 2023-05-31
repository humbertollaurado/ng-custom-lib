import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomLibComponent } from './my-custom-lib.component';

describe('MyCustomLibComponent', () => {
  let component: MyCustomLibComponent;
  let fixture: ComponentFixture<MyCustomLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomLibComponent]
    });
    fixture = TestBed.createComponent(MyCustomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
