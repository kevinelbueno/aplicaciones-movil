import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./task-flow/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./task-flow/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task-flow/tasks/tasks.module').then(m => m.TasksPageModule)
  },
  {
    path: 'habits',
    loadChildren: () => import('./task-flow/habits/habits.module').then(m => m.HabitsPageModule)
  },
  {
    path: 'productivity',
    loadChildren: () => import('./task-flow/productivity/productivity.module').then(m => m.ProductivityPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./task-flow/recommendations/recommendations.module').then(m => m.RecommendationsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./task-flow/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'routine',
    loadChildren: () => import('./task-flow/routine/routine.module').then(m => m.RoutinePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
