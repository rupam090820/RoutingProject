import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNfComponent } from './pnf.component';

describe('PNfComponent', () => {
  let component: PNfComponent;
  let fixture: ComponentFixture<PNfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PNfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
