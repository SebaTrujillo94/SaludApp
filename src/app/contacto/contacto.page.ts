import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { IonBadge } from '@ionic/angular/standalone';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonButton,
  ]
})
export class ContactoPage {
  ultimasConsultas = [
    { nombre: 'Dra. Ana Pérez', especialidad: 'Cardiología', fecha: '2024-05-20', hora: '10:00' },
    { nombre: 'Dr. Luis Gómez', especialidad: 'Dermatología', fecha: '2024-04-15', hora: '15:30' },
    { nombre: 'Dra. Marta Ruiz', especialidad: 'Pediatría', fecha: '2024-03-10', hora: '09:00' },
    { nombre: 'Dr. Juan Torres', especialidad: 'Neurología', fecha: '2024-02-28', hora: '12:00' },
    { nombre: 'Dra. Paula Díaz', especialidad: 'Ginecología', fecha: '2024-01-18', hora: '11:15' },
    { nombre: 'Dr. Carlos Méndez', especialidad: 'Oftalmología', fecha: '2023-12-05', hora: '16:45' }
  ];

  proximasConsultas = [
  { nombre: 'Dra. Laura Sánchez', especialidad: 'Endocrinología', fecha: '2025-06-10', hora: '08:30', estado: 'pendiente' },
  { nombre: 'Dr. Mario Vargas', especialidad: 'Traumatología', fecha: '2025-06-15', hora: '14:00', estado: 'pendiente' },
  { nombre: 'Dra. Silvia Romero', especialidad: 'Reumatología', fecha: '2025-06-20', hora: '10:45', estado: 'pendiente' },
  { nombre: 'Dr. Andrés López', especialidad: 'Psiquiatría', fecha: '2025-06-25', hora: '13:30', estado: 'pendiente' },
  { nombre: 'Dra. Patricia León', especialidad: 'Otorrinolaringología', fecha: '2025-07-01', hora: '09:15', estado: 'pendiente' },
  { nombre: 'Dr. Ernesto Gil', especialidad: 'Urología', fecha: '2025-07-05', hora: '15:00', estado: 'pendiente' }
];


// Métodos para cambiar estado
confirmarCita(consulta: any) {
  consulta.estado = 'confirmada';
}
cancelarCita(consulta: any) {
  consulta.estado = 'cancelada';
}
}
