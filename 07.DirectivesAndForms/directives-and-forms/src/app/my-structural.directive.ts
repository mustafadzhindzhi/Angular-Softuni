import { Directive, Input, OnChanges, OnInit, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural'
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(@Optional() private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    console.log(this.templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('On Changes', this.appMyStructural);
    console.log('myTmpRef', this.myTmpRef);
    console.log('templateRef', this.templateRef);
    

    const template = this.templateRef || this.myTmpRef;

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(template,
        //context
        {
          myCystomValue: 'this is my custom message',
          myNum: 123,
          $implicit: 'Default Value'
        }
      )
    } else {

    }
  }

}
