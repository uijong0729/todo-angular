import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // 사용자 이벤트
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  // 사용자 이벤트
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

}
