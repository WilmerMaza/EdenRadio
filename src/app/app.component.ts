import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, CommonModule],
  template: `
 <app-navbar></app-navbar>
  <main> 
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EdenRadio';
}
