import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WordGroupsComponent } from './pages/word-groups/word-groups.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AboutComponent } from './pages/about/about.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'word-groups', component: WordGroupsComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  // Redirect any unknown paths to the main component
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
