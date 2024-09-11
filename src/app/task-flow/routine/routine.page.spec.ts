import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutinePage } from './routine.page';

describe('RoutinePage', () => {
  let component: RoutinePage;
  let fixture: ComponentFixture<RoutinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
