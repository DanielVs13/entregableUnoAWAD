import { Component, inject } from '@angular/core';
import { PcService } from '../../services/pc.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tablaUno',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tablaUno.component.html',
  styleUrl: './tablaUno.component.css',
})
export class TablaUnoComponent {
  private service = inject(PcService);
  pc: any;

  ngOnInit() {
    this.service.getPc().subscribe((p) => (this.pc = p));
  }
}
