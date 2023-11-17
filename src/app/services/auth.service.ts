import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${environment.apiEndpoint}/phrini_fluent_users/login/`; // Use environment variable
  private signupUrl = `${environment.apiEndpoint}/phrini_fluent_users/signup/`; // Use environment variable

  // BehaviorSubject to hold the current auth state
  private authStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());
  authState: Observable<boolean> = this.authStateSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.loginUrl, { username, password }).pipe(
      catchError(this.handleError)
    );
  }

  signup(name: string, surname: string, email: string, username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.signupUrl, { name, surname, email, username, password }).pipe(
      catchError(this.handleError)
    );
  }

  // Method to update auth state
  setAuthState(value: boolean) {
    this.authStateSubject.next(value);
  }

  // Method to check if token exists
  hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // Method to log out
  logout() {
    localStorage.removeItem('auth_token');
    this.setAuthState(false); // Update authState to false when logged out
  }

  private handleError(error: any) {
    // Handle the error properly in a real app
    return throwError(error.error);
  }
}
