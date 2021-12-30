import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  constructor() { 
    
  }

  counter: number = 0;

  ngOnInit(): void {
  }

  count(): void {
    this.counter += 1;
  }

}
