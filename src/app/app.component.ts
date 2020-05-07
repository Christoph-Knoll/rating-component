import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  max: number
  act: number

  ngOnInit(): void {
    this.max = 5
    this.act = 0
  }

  onRating(event){
      console.log(event) 
  }

  title = 'Rating Component';
}
