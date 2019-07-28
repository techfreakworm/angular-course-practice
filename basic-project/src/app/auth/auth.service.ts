import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  regreshToken: string;
  expiresIn: string;
  localId: string;
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
    ).pipe(catchError(errorResponse => {
      let error = 'An unknown error occured!';
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(error);
      }
      switch (errorResponse.error.error.message) {
        case 'INVALID_EMAIL':
          error = 'This email already exists!';
      }
      return throwError(error);
    }));
  }

}
