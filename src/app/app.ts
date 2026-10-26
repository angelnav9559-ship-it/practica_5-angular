
import { Component } from '@angular/core';
import { AGallegos } from './a-gallegos/a-gallegos';

@Component({

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AArguello } from './a-arguello/a-arguello';

@Component({
  imports: [RouterOutlet, AArguello],
  selector: 'app-root',
  standalone: true,
  imports: [AGallegos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
