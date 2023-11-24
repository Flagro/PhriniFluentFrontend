import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WordGroup } from '../models/word-group.model';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class WordGroupService {
  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getPublicWordGroups(language: string): Observable<WordGroup[]> {
    return this.http.get<WordGroup[]>(`${this.apiUrl}/word-groups/public/?language=${language}`);
  }

  getPrivateWordGroups(language: string): Observable<WordGroup[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    });
    return this.http.get<WordGroup[]>(`${this.apiUrl}/word-groups/private/?language=${language}`, { headers });
  }

  getRandomWordFromGroup(groupId: number): Observable<Word> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    });
    return this.http.get<Word>(`${this.apiUrl}/word-groups/${groupId}/random/`, { headers });
  }

  getWordSimilarity(wordId: number, text: string): Observable<{ similarity: number }> {
    return this.http.post<{ similarity: number }>(`${this.apiUrl}/words/${wordId}/similarity/`, { text });
  }
}
