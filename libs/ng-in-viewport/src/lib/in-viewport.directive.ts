import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[inViewport]',
  exportAs: 'InViewport'
})
export class InViewportDirective {
  @Input('inViewportOptions')
  private set options(value: any) {}

  @Output('inViewportAction')
  public readonly event: EventEmitter<any> = new EventEmitter<any>();

  private config: any;

  constructor() {}
}
