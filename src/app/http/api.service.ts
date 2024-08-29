import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(
      'https://api.jamendo.com/v3.0/artists/tracks/?client_id=72dbb55c&format=jsonpretty&order=track_name_desc&name=Both'
    );
  }
}
