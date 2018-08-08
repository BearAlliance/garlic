import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMeComponent } from './mini-me.component';

describe('MiniMeComponent', () => {
  let component: MiniMeComponent;
  let fixture: ComponentFixture<MiniMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
