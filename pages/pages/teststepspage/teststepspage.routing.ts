import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeststepspageComponent } from './teststepspage.component';

const routes: Routes = [{
  path: '',
  component: TeststepspageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeststepspageRoutingModule {}