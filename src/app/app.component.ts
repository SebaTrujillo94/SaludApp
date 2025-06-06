import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonFooter, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonIcon
  ],
})
export class AppComponent {
  constructor(private router: Router) {}

   irAHome() {
    this.router.navigate(['/home']);
  }
}