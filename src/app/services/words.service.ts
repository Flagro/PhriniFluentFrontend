import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl = environment.apiEndpoint + '/phrini_fluent_words';

  constructor(private http: HttpClient) { }

  getRandomWord(groupId: number): Observable<Word> {
    return this.http.get<Word>(`${this.apiUrl}/word-groups/${groupId}/random/`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 403 || error.status === 404) {
      window.location.href = '/';
    }
    return throwError('Something bad happened; please try again later.');
  }
}
