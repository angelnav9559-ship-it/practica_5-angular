import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AArguello } from './a-arguello/a-arguello';

@Component({
  imports: [RouterOutlet, AArguello],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prcatica5');
}
