import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Input() quote!: Quotes;

  @Output() isDelete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    this.isDelete.emit(complete);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
