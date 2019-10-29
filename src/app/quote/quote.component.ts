import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'Amos Mwangi','Abraham Lincon', 'When you cant find sunshine, be the sunshine',new Date(2019,9,14),0,0),
    new Quote(2,'Daisy spark','Isaac Blue','If your goals dont scare you. They arent big enough.',new Date(2019,6,9),0,0),
    new Quote(3,'Victor Teka','Amos Mwangi','Dont wait for opportunity. Creat it.',new Date(2019,1,12),0,0),
  ];

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  bestQuote() {
    let upVoteArr: number[] = [];
    for (let i of this.quotes) {
      upVoteArr.push(i.upVote);
    }
    let maxVote = Math.max(...upVoteArr);
    let highestVotedQuote = this.quotes.find(quote => quote.upVote === maxVote);
    return highestVotedQuote;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}