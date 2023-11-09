import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.apiEndpoint}/api/login`; // Use environment variable
  private signupUrl = `${environment.apiEndpoint}/api/signup`; // Use environment variable

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password });
  }

  signup(name: string, surname: string, email: string, username: string, password: string): Observable<any> {
    return this.http.post(this.signupUrl, { name, surname, email, username, password });
  }
}
