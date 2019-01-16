import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentServiceComponent } from './content-service.component';

describe('ContentServiceComponent', () => {
  let component: ContentServiceComponent;
  let fixture: ComponentFixture<ContentServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
