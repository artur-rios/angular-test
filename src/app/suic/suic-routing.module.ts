import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiTestComponent } from './gui-test/gui-test.component';

const routes: Routes = [
  {
    path: 'test',
    component: GuiTestComponent,
  },
  {
    path: '**',
    redirectTo: 'test',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuicTestRoutingModule {}
