import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppenderComponent } from './book-appender.component';

describe('BookAppenderComponent', () => {
  let component: BookAppenderComponent;
  let fixture: ComponentFixture<BookAppenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAppenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
