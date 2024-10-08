import { Component } from '@angular/core';
import { FormularioInformacionComponent } from '../../components/formularioInformacion/formularioInformacion.component';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [FormularioInformacionComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {}
