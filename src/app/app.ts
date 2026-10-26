import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ARodriguez } from './a-rodriguez/a-rodriguez';

@Component({
  imports: [RouterOutlet, ARodriguez],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prcatica5');
}
