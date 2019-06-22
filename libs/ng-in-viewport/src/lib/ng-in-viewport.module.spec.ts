import { async, TestBed } from '@angular/core/testing';
import { NgInViewportModule } from './ng-in-viewport.module';

describe('NgInViewportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgInViewportModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgInViewportModule).toBeDefined();
  });
});
