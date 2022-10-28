import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [

    new Quotes(1, 'Technology is best when it brings people together','Matt Mullenweg', 35, 12, new Date(2022, 9, 22), false),
    new Quotes(2, 'It has become appallingly obvious that our technology has exceeded our humanity', 'Albert Einstein', 10, 5, new Date(2022, 9, 18), false),
    new Quotes(3, 'If it keeps up, man will atrophy all his limbs but the push-button finger', 'Frank Lloyd Wright', 11, 6, new Date(2022, 9, 18), false),
    new Quotes(4, 'The greatest glory in living lies not in never falling, but in rising every time we fall', 'Nelson Mandela', 10, 16, new Date(2022, 7, 30), false),
    new Quotes(5,'The way to get started is to quit talking and begin doing', 'Walt Disney', 67, 30, new Date(2022, 7, 30), false),
    new Quotes(4, 'If life were predictable it would cease to be life, and be without flavor', 'Eleanor Roosevelt', 67, 3, new Date(2022, 4, 10), false)
  ];

  populars:Quotes[] = [
    new Quotes(5,'The way to get started is to quit talking and begin doing', 'Walt Disney', 67, 30, new Date(2022, 7, 30), false),
    new Quotes(4, 'If life were predictable it would cease to be life, and be without flavor', 'Eleanor Roosevelt', 67, 3, new Date(2022, 4, 10), false)

  ];

  addNewQuote(quote:Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote)
  }

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  };
  quoteDeleted(isDelete:any, index:number){
    if(isDelete){
      this.quotes.splice(index,1);
    }

  }
  // vote quote
upvoteClick(index: number){
    var up=this.quotes[index].upvotes+1;
    this.quotes[index].upvotes=up;
    
}


downvoteClick(index: number){
  var down=this.quotes[index].downvotes+1;
  this.quotes[index].downvotes=down;

}
mostPopular(){

  
  this.populars.splice(0,this.populars.length);

  var largest=this.quotes[0].upvotes;
  var number=null;
  for (var i=0;i<this.quotes.length;i++){
    number=this.quotes[i].upvotes

    largest=Math.max(largest,number)
  }
  
  for (var i=0;i<this.quotes.length;i++){
    
    if(this.quotes[i].upvotes===largest){
      this.populars.push(this.quotes[i]);
    }
  }

  

};

  constructor() { }

  ngOnInit(): void {
  
  }

}
