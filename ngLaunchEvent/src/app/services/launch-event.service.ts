import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaunchEvent } from '../models/launch-event';

@Injectable({
  providedIn: 'root'
})
export class LaunchEventService {

  private url = environment.baseUrl + 'api/events';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<LaunchEvent[]> {
    return this.http.get<LaunchEvent[]>(this.url);
  }

  create(event: LaunchEvent): Observable<LaunchEvent> {
    return this.http.post<LaunchEvent>(this.url, event).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'Launch Event service create() error: ' + err
          )
        );
      })
    );
  }

  update(id: number, event: LaunchEvent) {
    return this.http.put(this.url + `/` + id, event).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'Launch Event service update() error: ' + err
          )
        );
      })
    )
  };

  destroy(id: number) {
    return this.http.delete(this.url + `/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'Launch Event service destroy() error: ' + err
          )
        );
      })
    )
  }

}
