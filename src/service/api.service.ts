import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url = env.apiUrl;

  public get<T>(uri: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.url + uri)
        .subscribe(
          this.dataResponseHandler<T>(resolve),
          this.errorResponseHandler<T>(reject)
        );
    });
  }

  private dataResponseHandler<T>(resolve: (...args: any) => void) {
    return (data) => {
      // do response handing
      resolve(data);
    };
  }

  private errorResponseHandler<T>(reject: (...args: any) => void) {
    return (error) => {
      // do error handling
      reject(error);
    };
  }
}
