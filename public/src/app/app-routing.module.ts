import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: 'pets', component: DashboardComponent},
  { path: 'pets/new', component: NewComponent},
  { path: 'pets/:id', component: ReviewsComponent},
  { path: 'pets/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
