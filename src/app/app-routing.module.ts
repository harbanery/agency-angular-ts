import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Shell } from './shell/services/shell.service';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';

export const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: HomeComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'service/:id', component: ServiceDetailComponent },

    { path: '**', redirectTo: '' },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
