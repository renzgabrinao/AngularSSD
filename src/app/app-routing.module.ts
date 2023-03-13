import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:slug', component: ProjectDetailComponent},
  {path: 'projects/categories/:slug', component: ProjectsComponent},
  {path: 'projects/tags/:slug', component: ProjectsComponent},
  {path: '', redirectTo: '/projects', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
