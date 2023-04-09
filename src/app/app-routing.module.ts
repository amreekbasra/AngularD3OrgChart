import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierarchyChartComponent } from './components/hierarchy-chart/hierarchy-chart.component';

const routes: Routes = [
  { path:"tree", component: HierarchyChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
