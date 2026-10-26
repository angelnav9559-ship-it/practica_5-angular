import { Component } from '@angular/core';
import { LPrado } from './l-prado/l-prado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LPrado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}