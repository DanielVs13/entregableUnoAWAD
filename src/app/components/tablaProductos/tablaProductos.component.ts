import { Component, inject } from '@angular/core';
import { PcService } from '../../services/pc.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablaProductos',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './tablaProductos.component.html',
  styleUrl: './tablaProductos.component.css',
})
export class TablaProductosComponent {
  service = inject(PcService);
  pc: any;
  busqueda: any;
  modoNocturno: boolean = false;
  vistaGaleria: boolean = true;
  modoEspanol: boolean = true;

  cambiarModo() {
    this.modoNocturno = !this.modoNocturno;
    this.vistaGaleria = !this.vistaGaleria;
    this.modoEspanol = !this.modoEspanol;
  }

  ngOnInit() {
    this.service.getPc().subscribe((p) => (this.pc = p));
  }
  filtrarPorMarca(pc: any[], marca: string): any[] {
    if (!pc || !marca) {
      return pc;
    }
    return pc.filter(
      (item) => item.marca.toLowerCase() === marca.toLowerCase()
    );
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
