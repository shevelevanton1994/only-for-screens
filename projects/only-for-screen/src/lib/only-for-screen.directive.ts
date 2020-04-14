import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[onlyForScreen]',
  providers: [{ provide: Window, useValue: window }],
})
export class OnlyForScreenDirective implements OnInit {
  @Input() onlyForScreen;
  private resize = fromEvent(window, 'resize');
  private MOBILE = 641;
  private TABLET = 1025;

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
  ) {
      this.resize
          .pipe(throttleTime(250), distinctUntilChanged())
          .subscribe(() => {
              this.updateOnResize();
          });
  }
  ngOnInit(): void {
      this.updateOnResize();
  }
  actualScreenDimention(): string {
      if (window.innerWidth < this.MOBILE) {
          return 'mobile';
      }
      if (window.innerWidth < this.TABLET) {
          return 'tablet';
      }
      return 'desktop';
  }

  updateOnResize() {
      this.viewContainer.clear();
      if (this.actualScreenDimention().includes(this.onlyForScreen)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      }
  }
}
