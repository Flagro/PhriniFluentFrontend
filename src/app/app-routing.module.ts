import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { WordGroupsComponent } from './pages/word-groups/word-groups.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AboutComponent } from './pages/about/about.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'word-groups', component: WordGroupsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
