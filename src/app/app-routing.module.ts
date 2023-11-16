import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { WordGroupsComponent } from './pages/word-groups/word-groups.component';
import { PublicGroupComponent } from './pages/public-group/public-group.component';
import { PrivateGroupComponent } from './pages/private-group/private-group.component';
import { AboutComponent } from './pages/about/about.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignupSuccessComponent } from './pages/signup-success/signup-success.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'groups', component: WordGroupsComponent, children: [
    { path: 'public/:groupId', component: PublicGroupComponent },
    { path: 'private/:groupId', component: PrivateGroupComponent }
  ]},
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup-successs', component: SignupSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
