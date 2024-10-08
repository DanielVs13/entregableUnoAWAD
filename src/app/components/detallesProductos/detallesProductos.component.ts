import { Component, inject } from '@angular/core';
import { PcService } from '../../services/pc.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detallesProductos',
  standalone: true,
  imports: [],
  templateUrl: './detallesProductos.component.html',
  styleUrl: './detallesProductos.component.css',
})
export class DetallesProductosComponent {
  servicio = inject(PcService);
  router = inject(ActivatedRoute);
  pc: any;

  ngOnInit() {
    this.router.params.subscribe((id) => {
      this.servicio.getPcID(id['idPc']).subscribe((a) => {
        this.pc = a;
      });
    });
  }
}
