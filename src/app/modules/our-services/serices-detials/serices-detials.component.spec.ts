import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SericesDetialsComponent } from './serices-detials.component';

describe('SericesDetialsComponent', () => {
  let component: SericesDetialsComponent;
  let fixture: ComponentFixture<SericesDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SericesDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SericesDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
