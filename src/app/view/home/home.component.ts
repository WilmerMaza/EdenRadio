import { Component } from '@angular/core';
import { BannerInicioComponent } from '../components/banner-inicio/banner-inicio.component';
import { ContactoComponent } from "../components/contacto/contacto.component";
import { HorariosComponent } from "../components/horarios/horarios.component";
import { MinisteriosComponent } from '../components/ministerios/ministerios.component';
import { RadioComponent } from '../components/radio/radio.component';
import { SobreNosotrosComponent } from '../components/sobre-nosotros/sobre-nosotros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerInicioComponent, RadioComponent, SobreNosotrosComponent, MinisteriosComponent, HorariosComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
