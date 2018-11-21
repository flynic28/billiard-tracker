import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTrackerPage } from './game-tracker.page';

describe('GameTrackerPage', () => {
  let component: GameTrackerPage;
  let fixture: ComponentFixture<GameTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
