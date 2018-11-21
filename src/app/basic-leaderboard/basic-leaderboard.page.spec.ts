import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLeaderboardPage } from './basic-leaderboard.page';

describe('BasicLeaderboardPage', () => {
  let component: BasicLeaderboardPage;
  let fixture: ComponentFixture<BasicLeaderboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLeaderboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLeaderboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
