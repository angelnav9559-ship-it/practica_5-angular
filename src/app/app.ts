import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// Importación de los componentes de cada integrante del equipo
import { AGallegos } from './a-gallegos/a-gallegos';
import { ARodriguez } from './a-rodriguez/a-rodriguez';
import { LPrado } from './l-prado/l-prado';
import { AArguello } from './a-arguello/a-arguello';

@Component({
  selector: 'app-root',
  standalone: true,
  // Registramos todas las páginas y las herramientas de enrutamiento aquí
  imports: [
    RouterOutlet, 
    RouterLink, 
    AGallegos, 
    ARodriguez, 
    LPrado, 
    AArguello
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}


  imports: [LPrado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
