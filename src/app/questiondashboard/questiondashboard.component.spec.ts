import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiondashboardComponent } from './questiondashboard.component';

describe('QuestiondashboardComponent', () => {
  let component: QuestiondashboardComponent;
  let fixture: ComponentFixture<QuestiondashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestiondashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
