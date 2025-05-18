import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path:"netflix", component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
