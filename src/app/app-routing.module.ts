import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ResultsComponent } from './view/results/results.component';
import { resultsResolver } from './resolvers/results/results.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'results',
    component: ResultsComponent,
    resolve: {
      results: resultsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
