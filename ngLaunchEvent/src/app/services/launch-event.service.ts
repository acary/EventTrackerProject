import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaunchEvent } from '../models/launch-event';

@Injectable({
  providedIn: 'root'
})
export class LaunchEventService {

  private url = environment.baseUrl + 'api/events';

  private launchEvents: LaunchEvent[] = [];

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<LaunchEvent[]> {
    return this.http.get<LaunchEvent[]>(this.url);
  }
}
