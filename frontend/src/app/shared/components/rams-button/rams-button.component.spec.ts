import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsButtonComponent } from './rams-button.component';

describe('RamsButtonComponent', () => {
  let component: RamsButtonComponent;
  let fixture: ComponentFixture<RamsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamsButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
