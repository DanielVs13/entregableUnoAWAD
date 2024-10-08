import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PcService {
  constructor(private https: HttpClient) {}

  private api_Pc = 'http://localhost:3000/pc';

  getPc(): Observable<any> {
    return this.https.get(this.api_Pc);
  }
  getPcID(id: any): Observable<any> {
    return this.https.get(`${this.api_Pc}/${id}`);
  }
}
