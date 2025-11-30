import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private http = inject(HttpClient);

  private get headers() {
    return {
      'apikey': environment.supabase.anonKey,
      'Authorization': `Bearer ${environment.supabase.anonKey}`,
      'Content-Type': 'application/json',
    };
  }

  /**
   * Get all rows from a table
   */
  getAll<T>(table: string): Observable<T[]> {
    return this.http.get<T[]>(`${environment.supabase.url}/rest/v1/${table}?select=*`, {
      headers: this.headers
    });
  }

  /**
   * Get rows with custom query params
   * Example: getWithQuery('testimonials', 'select=*&limit=10')
   */
  getWithQuery<T>(table: string, query: string): Observable<T[]> {
    return this.http.get<T[]>(`${environment.supabase.url}/rest/v1/${table}?${query}`, {
      headers: this.headers
    });
  }

  /**
   * Get a single row by id
   */
  getById<T>(table: string, id: string | number): Observable<T[]> {
    return this.http.get<T[]>(`${environment.supabase.url}/rest/v1/${table}?id=eq.${id}`, {
      headers: this.headers
    });
  }

  /**
   * Insert a new row
   */
  insert<T>(table: string, data: Partial<T>): Observable<T> {
    return this.http.post<T>(`${environment.supabase.url}/rest/v1/${table}`, data, {
      headers: { ...this.headers, 'Prefer': 'return=representation' }
    });
  }

  /**
   * Update a row by id
   */
  update<T>(table: string, id: string | number, data: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${environment.supabase.url}/rest/v1/${table}?id=eq.${id}`, data, {
      headers: { ...this.headers, 'Prefer': 'return=representation' }
    });
  }

  /**
   * Delete a row by id
   */
  delete(table: string, id: string | number): Observable<void> {
    return this.http.delete<void>(`${environment.supabase.url}/rest/v1/${table}?id=eq.${id}`, {
      headers: this.headers
    });
  }
}
