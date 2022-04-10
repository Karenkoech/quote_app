import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent implements OnInit {

      userModel=new Quote('','','','','');
      // @Output() onSubmit=new EventEmitter();
      

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert('Great quote you wrote there ' )
  }
}
