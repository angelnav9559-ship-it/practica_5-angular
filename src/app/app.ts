import { Component } from '@angular/core';
import { AGallegos } from './a-gallegos/a-gallegos';
import { Component } from '@angular/core';
import { LPrado } from './l-prado/l-prado';

@Component({

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ARodriguez } from './a-rodriguez/a-rodriguez';

@Component({
  imports: [RouterOutlet, ARodriguez],
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

  imports: [LPrado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
