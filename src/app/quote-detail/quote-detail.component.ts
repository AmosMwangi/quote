import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
 
  // set initial to 0
  vote = 0;

  @Output() isComplete = new EventEmitter<boolean>();

  // delete
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  // initial to 0
  constructor() {
  }

  likeVote(): boolean{
    // set an increment of 1 per click
    this.quote.upVote +=1;
    return false;
  }

  dislikeVote(): boolean{
    // vice verser => decrease by -1 per click
    this.quote.downVote -=1;
    return false;
  }

  ngOnInit() {
  }

}
