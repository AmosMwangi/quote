import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'Amos Mwangi','Abraham Lincon', 'Find an online version and watch merlin find his son',new Date(2019,9,14)),
    new Quote(2,'Kayte spark','Abraham Lincon','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quote(3,'Migos Qwevo','Abraham Lincon','Diana has her birthday coming up soon',new Date(2019,1,12)),
    new Quote(4,'Salim Bitu','Abraham Lincon','Pupper likes expensive snacks',new Date(2019,11,18)),
    new Quote(5,'Dan Wemba','Abraham Lincon','Damn Math',new Date(2019,2,14)),
    new Quote(6,'Lil Baby','Abraham Lincon','Cause I am an evil overlord',new Date(2019,3,14)),
  ];

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
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