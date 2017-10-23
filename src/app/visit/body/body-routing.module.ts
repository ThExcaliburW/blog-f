import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VisitComponent} from '../visit.component';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  {
    path: 'visit',
    component: VisitComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'article',
        component: ArticleComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule {
}
