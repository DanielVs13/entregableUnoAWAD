import { Component } from '@angular/core';
import { TablaUnoComponent } from '../../components/tablaUno/tablaUno.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TablaUnoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
