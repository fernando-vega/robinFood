import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WelcomeInterface } from '../interfaces/response.interface';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = `${environment.DATA_URL}`;
  public users: UserInterface[] = [];

  constructor(private httpClient: HttpClient) { }

   public getInfo(): Observable<WelcomeInterface> {
    return this.httpClient.get<WelcomeInterface>(this.apiUrl);
  }
}
