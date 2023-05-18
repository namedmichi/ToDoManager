import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSettingsDialogComponent } from './card-settings-dialog.component';

describe('CardSettingsDialogComponent', () => {
  let component: CardSettingsDialogComponent;
  let fixture: ComponentFixture<CardSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSettingsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
