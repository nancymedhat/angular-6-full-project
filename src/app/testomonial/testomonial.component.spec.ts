import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialComponent } from './testomonial.component';

describe('TestomonialComponent', () => {
  let component: TestomonialComponent;
  let fixture: ComponentFixture<TestomonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestomonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
