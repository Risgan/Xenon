import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { BalanceComponent } from './Pages/balance/balance.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MovimientosComponent } from './Pages/movimientos/movimientos.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // pathMatch: 'full'
      },
      {
        path: 'Movimientos',
        component: MovimientosComponent,
        pathMatch: 'full'
      },
      {
        path: 'Balance',
        component: BalanceComponent,
        pathMatch: 'full'
      },
      {
        path: 'Perfil',
        component: PerfilComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
