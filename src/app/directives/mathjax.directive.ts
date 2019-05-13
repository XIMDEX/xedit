import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

import 'mathjax/unpacked/MathJax';

@Directive({
  selector: '[MathJax]'
})
export class MathjaxDirective implements OnChanges {
  @Input() MathJax: string;
  element: any = null;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnChanges() {
   /* this.element.innerHTML = this.MathJax;
    console.log('>> ngOnChanges --------------------------');
    //this.element.style.backgroundColor = 'yellow';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element]);
    console.log(this.element)
    console.log('>> ngOnChanges --------------------------'); */
  }
}
