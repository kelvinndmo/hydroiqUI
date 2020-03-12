import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import { DeviceResolver } from './resolvers/product.resolver';
import { DevicesComponent } from './components/devices/devices.component';


const routes: Routes = [
  {
    path: "",
    component: DevicesComponent,
    pathMatch: "full"
  },
  {
    path: 'detail/:id',
    component: DeviceDetailComponent,
    resolve: {
      resolvedData: DeviceResolver
    },
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
