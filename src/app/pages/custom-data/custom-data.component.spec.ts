import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDataComponent } from './custom-data.component';

describe('CustomDataComponent', () => {
  let component: CustomDataComponent;
  let fixture: ComponentFixture<CustomDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDataComponent]
    });
    fixture = TestBed.createComponent(CustomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
