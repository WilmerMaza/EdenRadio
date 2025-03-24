import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { catchError, interval, of, Subscription, switchMap } from 'rxjs';
import { Iresponse_now_play } from '../../../../../core/interface/response_now_play';
import { NowPlayingService } from '../../services/now-playing.service';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  public now_play: string = "";

  constructor(
    private $nowPlayingService: NowPlayingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  public ngOnInit(): void {
    this.getDataNowPlay()

  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getDataNowPlay(): void {
    // Emite cada 5 segundos (5000 ms)
    if (isPlatformBrowser(this.platformId)) {
      this.subscription = interval(5000)
        .pipe(
          switchMap(() =>
            this.$nowPlayingService.get_now_play().pipe(
              catchError(err => {
                console.error('Error en la petición:', err);
                return of(null);
              })
            )
          )
        )
        .subscribe((res: Iresponse_now_play | null) => {
          if (res) {
            const { nowplaying } = res;
            this.now_play = nowplaying;
          }
        });
    }
  }

}
