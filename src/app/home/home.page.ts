import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonCard,           
    IonCardHeader,     
    IonCardTitle,      
    IonCardContent,
   
  ]
})
export class HomePage implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario') || '';
  }

  login() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }

  irAContacto() {
    this.router.navigate(['/contacto']);
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }
  irAFaq() {
    this.router.navigate(['/faq']);
  }

  irAQuienesSomos() {
  this.router.navigate(['/faq']);
}
  cerrarSesion() {
    if (window.confirm('¿Estás seguro que deseas cerrar sesión?')) {
      localStorage.removeItem('usuario');
      localStorage.removeItem('horaIngreso');
      this.router.navigate(['/login']);
    }
  }
}