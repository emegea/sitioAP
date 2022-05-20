import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../modelos/user';
import { IJwtResponse } from '../modelos/jwt-response';
import { tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  registro(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVER}/registro`,
      user).pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accesToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accesToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}

