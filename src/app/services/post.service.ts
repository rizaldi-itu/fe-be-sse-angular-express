import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { __values } from 'tslib';
import { Observable } from 'rxjs';

interface res {
  id: string;
  datetime: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://worldtimeapi.org/api/timezone/Asia/Jakarta';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<res[]> {
    return this.httpClient.get<res[]>(this.url);
    // .pipe(
    // map((res) => {
    //   const value = [];
    //   for (const key in res) {
    //     if (res.hasOwnProperty(key)) {
    //       value.push({ ...res[key], id: key });
    //     }
    //   }
    // })
    // );
    // .subscribe((res) => {
    //   datetime: res.datetime;
    // });
  }
}
