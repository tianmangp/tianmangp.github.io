import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowAlmComponent } from './follow-alm.component';

describe('FollowAlmComponent', () => {
  let component: FollowAlmComponent;
  let fixture: ComponentFixture<FollowAlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowAlmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowAlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
