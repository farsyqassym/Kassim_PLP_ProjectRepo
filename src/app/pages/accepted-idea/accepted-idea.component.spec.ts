import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedIdeaComponent } from './accepted-idea.component';

describe('AcceptedIdeaComponent', () => {
  let component: AcceptedIdeaComponent;
  let fixture: ComponentFixture<AcceptedIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
