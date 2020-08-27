import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
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
  constructor(private http: HttpClient) {}

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
}