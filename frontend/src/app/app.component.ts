import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CreditCardModule } from './credit-card/credit-card.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavbarComponent, MainComponent, FooterComponent, CreditCardModule],
})
export class AppComponent {
  constructor() {
    registerLocaleData(localeFr);
  }

  title = 'my-app';
}
