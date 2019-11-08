import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestMaterialComponent} from './test-material/test-material.component';
import {ResComponent} from './res/res.component';


const routes: Routes = [
  {
    path: '',
    component: TestMaterialComponent
  },
  {
    path: 'res',
    component: ResComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
