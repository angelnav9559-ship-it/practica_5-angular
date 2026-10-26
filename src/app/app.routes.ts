import { Routes } from '@angular/router';
import { AGallegos } from './a-gallegos/a-gallegos';
import { ARodriguez } from './a-rodriguez/a-rodriguez'; // Ajusten el nombre real de la clase de su compañero
import { DJoel } from './d-joel/d-joel';               // Ajusten el nombre real de la clase de su compañero

export const routes: Routes = [
  { path: 'angel-gallegos', component: AGallegos },
  { path: 'a-rodriguez', component: ARodriguez },
  { path: 'd-joel', component: DJoel },
  { path: '', redirectTo: '/angel-gallegos', 本文pathMatch: 'full' } // Ruta por defecto al abrir la app
];
