import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layout
import { BasicComponent } from '../layout/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    data: {},
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        data: { preload: true },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
