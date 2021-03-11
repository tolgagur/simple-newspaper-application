import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportnewComponent } from './sportnew/sportnew.component';
import { TechnewComponent } from './technew/technew.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'technews',component:TechnewComponent},
  {path:'sportnews',component:SportnewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
