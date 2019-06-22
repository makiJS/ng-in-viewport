import { async, TestBed } from '@angular/core/testing';
import { InViewportModule } from './ng-in-viewport.module';

describe('InViewportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InViewportModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InViewportModule).toBeDefined();
  });
});
