import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators/';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
        map(response => response), // this is to transform to javaScript object
        catchError(this.handleError));
  }


  private handleError(error: Response) {
    if(error.status === 404)
    return throwError('not found');
    return throwError( 'an unexpected error occcured');
  }
}
