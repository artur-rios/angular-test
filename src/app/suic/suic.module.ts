import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiTestComponent } from './gui-test/gui-test.component';
import { SuicTestRoutingModule } from './suic-routing.module';
import { SuicModule } from 'suic-angular';

@NgModule({
  declarations: [GuiTestComponent],
  imports: [CommonModule, SuicTestRoutingModule, SuicModule],
})
export class SuicTestModule {}
