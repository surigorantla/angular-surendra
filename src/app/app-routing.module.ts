import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'general' },
  { path: 'general', component: GeneralComponent },
  { path: 'eligibility', component: EligibilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
