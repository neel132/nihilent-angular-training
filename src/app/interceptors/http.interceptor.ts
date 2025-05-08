import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError, timeout, TimeoutError } from "rxjs";

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    return next.handle(modifiedReq).pipe(
      timeout(15000),
      catchError((error: HttpErrorResponse | TimeoutError) => {
        if(error instanceof TimeoutError) {
          console.error('Request timed out');
        } else {
          console.error('Http Error');
        }
        return throwError(() => error)
      })
    );
  }
}