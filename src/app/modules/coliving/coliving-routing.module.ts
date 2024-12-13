import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColivingComponent } from './coliving.component';
import { CreateUpdateColivingComponent } from './create-update-coliving/create-update-coliving.component';
const routes: Routes = [
  {
    path: '',
    component: ColivingComponent,
    children: [
      { path: 'create', component: CreateUpdateColivingComponent },
      { path: 'edit/:id', component: CreateUpdateColivingComponent },
      { path: 'view/:id', component: CreateUpdateColivingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColivingRoutingModule {}
