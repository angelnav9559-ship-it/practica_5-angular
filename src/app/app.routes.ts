import { Routes } from '@angular/router';
import { AGallegos } from './a-gallegos/a-gallegos';
import { ARodriguez } from './a-rodriguez/a-rodriguez';
import { LPrado } from './l-prado/l-prado';
import { AArguello } from './a-arguello/a-arguello';

export const routes: Routes = [
  { path: 'angel-gallegos', component: AGallegos },
  { path: 'a-rodriguez', component: ARodriguez },
  { path: 'l-prado', component: LPrado },
  { path: 'a-arguello', component: AArguello },
  { path: '', redirectTo: '/angel-gallegos', pathMatch: 'full' }
];
