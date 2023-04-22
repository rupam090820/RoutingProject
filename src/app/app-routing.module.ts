import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { PNfComponent } from './pnf/pnf.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  { path:'home',component:HomeComponent },
  {path:'course',component:CourseComponent},
  {path:'student',component:StudentComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'**',component:PNfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
