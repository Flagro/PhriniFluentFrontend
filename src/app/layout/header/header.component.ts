import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Update the path as per your structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen = false;
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    // Subscribe to authentication state changes
    this.authService.authState.subscribe((state) => {
      this.isLoggedIn = state;
    });
  }

  // Optional: implement logout functionality
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
