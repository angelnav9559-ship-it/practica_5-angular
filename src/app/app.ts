import { Component } from '@angular/core';
import { AGallegos } from './a-gallegos/a-gallegos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AGallegos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
