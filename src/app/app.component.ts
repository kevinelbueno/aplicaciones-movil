import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Define las páginas que quieres en el menú
  public appPages = [
    { title: 'Inicio de Sesión', url: '/login', icon: 'log-in' },
    { title: 'Calendario', url: '/calendar', icon: 'calendar' },
    { title: 'Gestor de Tareas', url: '/tasks', icon: 'list' },
    { title: 'Rastreador de Hábitos', url: '/habits', icon: 'repeat' },
    { title: 'Resúmenes de Productividad', url: '/productivity', icon: 'analytics' },
    { title: 'Recomendaciones', url: '/recommendations', icon: 'book' },
    { title: 'Crea tu Rutina', url: '/routine', icon: 'create' }
  ];

  public labels = ['Importante', 'Personal', 'Trabajo'];

  constructor() {}
}
