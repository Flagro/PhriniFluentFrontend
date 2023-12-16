import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html'
})
export class LogInComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('auth_token', data.token);
        this.router.navigate(['/']); // replace '/dashboard' with the route you want to navigate to after login
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    // Call the login method when the form is submitted
    this.login();
  }
}
