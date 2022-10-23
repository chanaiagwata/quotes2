import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [

    new Quotes(1, 'Technology is best when it brings people together','Matt Mullenweg', new Date(2022, 9, 22)),
    new Quotes(2, 'It has become appallingly obvious that our technology has exceeded our humanity', 'Albert Einstein', new Date(2022, 9, 18)),
    new Quotes(3, 'If it keeps up, man will atrophy all his limbs but the push-button finger', 'Frank Lloyd Wright', new Date(2022, 9, 18))
  ];
  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  };
  quoteDeleted(isComplete:any, index:number){
    if(isComplete){
      this.quotes.splice(index,1);
    }

  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
