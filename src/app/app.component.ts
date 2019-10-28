import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';
  constructor(private dialog: MatDialog){}

  openDialog(){
    this.dialog.open(QuoteFormComponent);
  }
}
