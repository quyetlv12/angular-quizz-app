import { QuestionUpdateComponent } from './question-update/question-update.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestiondashboardComponent } from './questiondashboard/questiondashboard.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WebsitelayoutComponent } from './layout/websitelayout/websitelayout.component';

const routes: Routes = [
  {
    path: '',
    component: WebsitelayoutComponent,
    children: [
      { path: '', component : HomepageComponent, pathMatch: 'full' },    
      { path: 'question/:id', component : DetailComponent, pathMatch: 'full' },     
    ],
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      { path: 'question/:id', component : QuestiondashboardComponent, pathMatch: 'full' },
      { path: 'add', component : AddQuestionComponent, pathMatch: 'full' },
      { path: 'question/edit/:type/:id', component : QuestionUpdateComponent, pathMatch: 'full' },    
    ],
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}