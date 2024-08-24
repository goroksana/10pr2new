import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHouseComponent } from './store-house.component';

describe('StoreHouseComponent', () => {
  let component: StoreHouseComponent;
  let fixture: ComponentFixture<StoreHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
