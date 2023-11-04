import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { WordGroupsComponent } from './pages/word-groups/word-groups.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AboutComponent } from './pages/about/about.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WordGroupsComponent,
    QuizComponent,
    AboutComponent,
    UserSettingsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
