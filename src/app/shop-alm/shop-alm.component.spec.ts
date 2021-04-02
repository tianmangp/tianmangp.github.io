import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAlmComponent } from './shop-alm.component';

describe('ShopAlmComponent', () => {
  let component: ShopAlmComponent;
  let fixture: ComponentFixture<ShopAlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAlmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
