import { Component } from '@angular/core';
import { FormularioContactosComponent } from '../../components/formularioContactos/formularioContactos.component';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [FormularioContactosComponent],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css',
})
export class ContactosComponent {}
