import { Injectable } from "@angular/core";
import { Observable, throwError, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PdfserviceService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  private sub = new Subject();
  subj$ = this.sub.asObservable();

  private searchValue = new Subject();
  searchValue$ = this.searchValue.asObservable();

  constructor(private http: HttpClient) {}
  send(value: any) {
    this.sub.next(value);
  }
  searchvalue(value: any) {
    this.searchValue.next(value);
  }
  getMaterialPdf() {
    return this.http.get(`${environment.apiUrl}`);
    // return this.http.get('../assets/Data/data.Json');
  }

  // getMaterialPdf(): Observable<any> {
  //   let API_URL = `${this.apiUrl}`;
  //   return this.http
  //     .get(API_URL, {
  //       responseType: "arraybuffer",
  //     })
  //     .pipe(catchError(this.error));
  //   // return this.http.get(API_URL, data).pipe(catchError(this.error));
  // }
  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  checked = new Observable((observer) => {
    let value = "checked";
  });
}
