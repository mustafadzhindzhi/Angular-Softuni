import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {
  // @HostListener('mouseover', ['$event']) mouseOverHandler(e:MouseEvent) {
  //   console.log(); 
  // }

  unsubFromEventsArr: MyVoid[] = []

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);
    // bad practice
    // this.elRef.nativeElement.style.background = 'orange';

    //good practice
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink')

    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this))

    const mouseLeaveEvent = this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));

    this.unsubFromEventsArr.push(mouseEnterEvent);
    this.unsubFromEventsArr.push(mouseLeaveEvent);
  }

  mouseEnterHandler(e: MouseEvent): void {
    // console.log(e);

    //Setting styles
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'orange');

    /**Setting classes */
    this.renderer.addClass(this.elRef.nativeElement, 'highlight')
  }

  mouseLeaveHandler(e: MouseEvent): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'initial')

    /**Setting classes */
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight')

  }

  ngOnDestroy(): void {
    console.log('on destroy invoked');

    console.log(this.unsubFromEventsArr);

    this.unsubFromEventsArr.forEach((eventFn) => {
      eventFn()
    });
  }
}
