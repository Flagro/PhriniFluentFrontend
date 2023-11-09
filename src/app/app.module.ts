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
import { PublicGroupComponent } from './pages/public-group/public-group.component';
import { PrivateGroupComponent } from './pages/private-group/private-group.component';

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
    PublicGroupComponent,
    PrivateGroupComponent
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
