import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantQuitFormComponent } from './cant-quit-form.component';

describe('CantQuitFormComponent', () => {
  let component: CantQuitFormComponent;
  let fixture: ComponentFixture<CantQuitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantQuitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantQuitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
