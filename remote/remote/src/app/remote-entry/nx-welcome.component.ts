import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountService } from '@shell/count-service';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Remote app works!</h1>
    <h1>App component works</h1>
    <p>Count: {{ countService.count }}</p>
    <button (click)="incre()">Incre</button>
    <button (click)="decre()">Decre</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  constructor(
    public countService: CountService,
  ) {}

  incre() {
    this.countService.increment();
  }

  decre() {
    this.countService.decrement();
  }
}
