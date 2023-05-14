import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogeComponent } from './add-dialoge.component';

describe('AddDialogeComponent', () => {
  let component: AddDialogeComponent;
  let fixture: ComponentFixture<AddDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
