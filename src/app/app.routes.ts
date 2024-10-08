import { Routes } from '@angular/router';
import { InicioComponent } from './screen/inicio/inicio.component';
import { ContactosComponent } from './screen/contactos/contactos.component';
import { InformacionComponent } from './screen/informacion/informacion.component';
import { ProductosComponent } from './screen/productos/productos.component';
import { DetallesProductosComponent } from './components/detallesProductos/detallesProductos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalles/:idTelefono', component: DetallesProductosComponent },
  { path: '**', redirectTo: 'inicio' },
];
