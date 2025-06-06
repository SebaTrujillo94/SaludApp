import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent,IonItem,IonLabel} from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,  
    IonLabel,
  ]
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

login() {
  const usuarioGuardado = localStorage.getItem('usuario');
  const claveGuardada = localStorage.getItem('clave');
  if (this.usuario === usuarioGuardado && this.contrasena === claveGuardada) {
    localStorage.setItem('horaIngreso', new Date().toLocaleString()); // Guarda la hora
    this.router.navigate(['/home']);
  } else {
    alert('Usuario o contraseña incorrecta');
  }
}
irARegistro() {
  this.router.navigate(['/registrarse']);
}
}