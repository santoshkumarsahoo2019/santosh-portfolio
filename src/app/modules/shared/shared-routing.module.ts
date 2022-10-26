import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('../experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'education',
    loadChildren: () => import('../education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'achievement',
    loadChildren: () => import('../achievement/achievement.module').then(m => m.AchievementModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
