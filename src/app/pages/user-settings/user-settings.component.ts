import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  name = '';
  surname = '';
  email = '';
  username = '';

  constructor() {
    // Initialize your variables here
    // For example, you might want to load the current user's settings
  }

  onSubmit() {
    // Implement your logic to save the settings
    // For example, send a request to your backend service
    console.log('Saving user settings', { name: this.name, surname: this.surname, email: this.email, username: this.username });
  }

  signOut() {
    // Implement your logic for signing out
    console.log('Signing out user');
    // For example, clear the authentication token and redirect to login page
  }
}
