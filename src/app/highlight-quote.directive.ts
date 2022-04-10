import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem: ElementRef<any>) {

   }
   @HostListener("click") onClicks(){
    this.textDeco("red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;

  }
}
