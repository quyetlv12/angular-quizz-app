import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSngComponent } from './question-sng.component';

describe('QuestionSngComponent', () => {
  let component: QuestionSngComponent;
  let fixture: ComponentFixture<QuestionSngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
