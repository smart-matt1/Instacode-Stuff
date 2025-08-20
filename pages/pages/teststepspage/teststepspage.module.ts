import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TeststepspageRoutingModule } from './teststepspage.routing';
import { TeststepspageComponent } from './teststepspage.component';

@NgModule({
  imports: [
    SharedModule,
    TeststepspageRoutingModule,
    TeststepspageComponent
  ],
  providers: [],
})
export class TeststepspageModule {}