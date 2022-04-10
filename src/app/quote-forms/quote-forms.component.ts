import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent implements OnInit {
  quote=new Quote(0,'','','',new Date());
  @Output() addAQuote=new EventEmitter<Quote>();
  addQuote():any { 
    this.addAQuote.emit(this.quote)
  } 
  constructor() { }

  ngOnInit(): void {
  }
  
}
