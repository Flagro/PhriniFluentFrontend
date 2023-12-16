import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent {
  name = '';
  surname = '';
  email = '';
  username = '';

  constructor(private authService: AuthService, private router: Router) {
    // Load current user's settings here
    // This could involve a call to the authService or another service
    // For example:
    // this.loadUserSettings();
  }

  loadUserSettings() {
    // Implement logic to load the user's current settings
    // For example, use authService to fetch the details
  }

  saveSettings() {
    // Implement logic to save the user settings
    // This could involve sending the updated details to your backend via authService
    console.log('Saving user settings', { name: this.name, surname: this.surname, email: this.email, username: this.username });
    // Example:
    // this.authService.updateUserSettings({name: this.name, ...}).subscribe(
    //   response => {
    //     // Handle successful update
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }

  onSubmit() {
    // Call saveSettings method when the form is submitted
    this.saveSettings();
  }

  signOut() {
    // Implement the sign-out logic
    // Typically, this would clear any authentication tokens and redirect the user
    this.authService.logout();
    this.router.navigate(['/login']); // Navigate to login page after logout
  }
}
