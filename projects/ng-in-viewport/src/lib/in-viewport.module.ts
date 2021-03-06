import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InViewportDirective } from './in-viewport.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InViewportDirective],
  exports: [InViewportDirective]
})
export class InViewportModule {}
