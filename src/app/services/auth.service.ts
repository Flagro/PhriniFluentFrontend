import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = false; // This should eventually be linked to your OAuth2 backend

    // Simulate a login - this will be replaced with real authentication logic
    login(username: string, password: string): Observable<boolean> {
        // Placeholder for actual authentication
        this.isLoggedIn = true; // Assume login is successful
        return of(this.isLoggedIn);
    }

    // Simulate a logout
    logout(): void {
        this.isLoggedIn = false;
    }

    // Check the login status
    checkLoggedIn(): Observable<boolean> {
        return of(this.isLoggedIn);
    }
}
