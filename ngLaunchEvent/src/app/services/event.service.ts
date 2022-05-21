import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = environment.baseUrl + 'api/events';

  constructor(
    private http: HttpClient
  ) { }
}
