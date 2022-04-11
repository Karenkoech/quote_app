import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quotes:Quote[] = [
    new Quote (1,'Cory House','“ Code is like humor. When you have to explain it, it’s bad.” ','',new Date()),
    new Quote (2, 'Austin Freeman','“Simplicity is the soul of efficiency.” ','',new Date()),
    new Quote (3, 'Ayn Rand','"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."','',new Date()),
    new Quote (4, 'J. Paul Getty','"Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing."','',new Date()),
  ];
  displayInfo(index:number){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
  }
  deleteAquote(isdeleted:any,index:number){
    if(isdeleted){
      let check=confirm("Hey!Do want to delete this quote?");
      if(check){
this.quotes.splice(index,1);
      }
    }

  }
  newQuote(quote:Quote){
    let quotesLength=this.quotes.length+1;
    quote.id=quotesLength+1;
    let quoteObj=new Quote(quotesLength,quote.name,quote.description,quote.quoteAuthor,new Date());
    this.quotes.unshift(quoteObj);
    
  
  QuotesComponent.constructor(); { }

  this.ngOnInit(); {
  }
  
}
}
