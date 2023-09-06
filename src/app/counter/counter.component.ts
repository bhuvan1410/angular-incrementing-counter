import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  counterId!: number;
  count = 0;
  counterStyles = {};

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  ngOnInit() {

    const themes = [
      { backgroundColor: '#007bff' },
      { backgroundColor: '#28a745' },
      { backgroundColor: '#ffc107' },
      { backgroundColor: '#dc3545' }
    ];

   
    this.counterStyles = themes[this.counterId - 1];
  }
}


