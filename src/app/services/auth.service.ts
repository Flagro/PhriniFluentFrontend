import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.apiEndpoint}/login`; // Use environment variable
  private signupUrl = `${environment.apiEndpoint}/signup`; // Use environment variable

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

  private handleError(error: any) {
    // Handle the error properly in a real app
    return throwError(error.error);
  }
}
