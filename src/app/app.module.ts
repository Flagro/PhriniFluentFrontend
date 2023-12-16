import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { WordGroupsComponent } from './pages/word-groups/word-groups.component';
import { AboutComponent } from './pages/about/about.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignupSuccessComponent } from './pages/signup-success/signup-success.component';
import { QuizComponent } from './pages/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WordGroupsComponent,
    AboutComponent,
    UserSettingsComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    SignupSuccessComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
