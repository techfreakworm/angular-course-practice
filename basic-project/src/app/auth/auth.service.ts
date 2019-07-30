import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  regreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(enteredEmail: string, enteredPassword: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBTqj8gG2uWkcCUtDQj55PAC4zQ17h-SM',
      {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  login(enteredEmail: string, enteredPassword: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBTqj8gG2uWkcCUtDQj55PAC4zQ17h-SM',
      {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let error = 'An unknown error occured!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(error);
    }
    switch (errorResponse.error.error.message) {
      case 'INVALID_EMAIL':
        error = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        error = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        error = 'This password is not correct.';
        break;
    }
    return throwError(error);
  }

}
