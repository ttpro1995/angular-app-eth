import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountingComponent } from './pages/counting/counting.component';
const routes: Routes = [ 
  {
    path: "",
    component: CountingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
