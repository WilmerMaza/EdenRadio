
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NowPlayingComponent } from "./components/now-playing/now-playing.component";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [NowPlayingComponent],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild('audioRef') audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('volumeSlider') volumeSlider!: ElementRef<HTMLInputElement>;

  public isPlaying: boolean = false;
  public isMuted = false;

  public ngOnInit(): void {
    this.isPlaying = false;
  }


  ngAfterViewInit(): void {
    // Inicializa el volumen del audio con el valor del slider
    this.audioElement.nativeElement.volume = parseFloat(this.volumeSlider.nativeElement.value);
  }

  public ngOnDestroy(): void {
    if (this.isPlaying) {
      this.audioElement.nativeElement.pause();
    }
    this.isPlaying = false;
  }

  onVolumeChange(event: Event): void {
    const volume = parseFloat((event.target as HTMLInputElement).value);
    this.audioElement.nativeElement.volume = volume;
    // Si el volumen es 0 se marca como muteado
    this.isMuted = volume === 0;
  }

  toggleMute(): void {
    // Alterna el estado de mute
    this.isMuted = !this.isMuted;
    const audioEl = this.audioElement.nativeElement;
    audioEl.muted = this.isMuted;

    // Actualiza el valor del slider según el estado
    if (this.isMuted) {
      this.volumeSlider.nativeElement.value = '0';
    } else {
      // Si se desactiva el mute, restauramos un volumen por defecto (por ejemplo, 1)
      this.volumeSlider.nativeElement.value = '1';
      audioEl.volume = 1;
    }
  }

  public togglePlay(): void {
    const audio = this.audioElement.nativeElement;
    if (!this.isPlaying) {
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }
}
