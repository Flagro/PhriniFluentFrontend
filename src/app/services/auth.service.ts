import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;

  constructor() {
    // Initialize with `false` indicating the user is not logged in.
    // In a real application, you might want to check for a token in localStorage here.
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  }

  // Observable to be used by components to reactively respond to authentication changes
  get authState(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Call this method when the user attempts to log in
  login(username: string, password: string): Observable<boolean> {
    // Placeholder for actual login logic
    // In a real application, you would make an HTTP request here
    // For this example, let's assume the user is authenticated if the username and password are 'admin'
    const isAuthenticated = username === 'admin' && password === 'admin';
    
    // Update the auth state
    this.isAuthenticatedSubject.next(isAuthenticated);

    return of(isAuthenticated);
  }

  // Call this method when the user logs out
  logout(): void {
    // Clear user authentication (e.g., remove the token from localStorage)
    // Update the auth state
    this.isAuthenticatedSubject.next(false);
  }

  // Helper method to check if the user is currently authenticated
  checkLoggedIn(): boolean {
    // In a real application, you might check for the presence of a token here
    return this.isAuthenticatedSubject.value;
  }
}
