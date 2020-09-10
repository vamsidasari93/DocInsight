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

  private annotations = new Subject();
  annatation$ = this.annotations.asObservable();

  private fileName = new Subject();
  pdfName$ = this.fileName.asObservable();

  private segemnetShow = new Subject();
  segemnets$ = this.segemnetShow.asObservable();

  private pagesdetails = new Subject();
  pageDetail$ = this.pagesdetails.asObservable();

  private annotationCount = new Subject();
  Annonationcount$ = this.annotationCount.asObservable();
  constructor(private http: HttpClient) {}

  send(value: any) {
    this.sub.next(value);
  }
  searchvalue(value: any) {
    this.searchValue.next(value);
  }
  annotation(value: any) {
    this.annotations.next(value);
  }
  pdfName(value: any) {
    this.fileName.next(value);
  }
  segemnets(value: any) {
    this.segemnetShow.next(value);
  }
  pageDetail(value: any, value2: any) {
    this.pagesdetails.next(value);
  }
  Annonationcount(value: any) {
    this.annotationCount.next(value);
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
