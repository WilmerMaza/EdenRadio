import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Iresponse_now_play } from '../../../../core/interface/response_now_play';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {

  private radioboss_now_play: string = environment.radioboss_now_play;

  constructor(private http: HttpClient) { }

  public get_now_play(): Observable<Iresponse_now_play> {
    const url = `${this.radioboss_now_play}`; // Ajusta la ruta según corresponda
    return this.http.get<Iresponse_now_play>(url);
  }
}
