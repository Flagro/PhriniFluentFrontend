import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  name = '';
  surname = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      // Handle password mismatch
      console.error("Passwords do not match!");
      return;
    }
    this.authService.signup(this.name, this.surname, this.email, this.username, this.password).subscribe(
      data => {
        localStorage.setItem('auth_token', data.token);
        this.router.navigate(['/login']); // Navigate to login or any other page
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    // Call the signup method when the form is submitted
    this.signup();
  }
}
