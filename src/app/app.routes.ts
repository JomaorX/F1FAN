import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverDetailsComponent } from './pages/driver-details/driver-details.component';
import { ForoPageComponent } from './pages/foro-page/foro-page.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página de inicio
    { path: 'calendario', component: CalendarioComponent }, // Próximas carreras
    { path: 'foro', component: ForoPageComponent }, // Equipos y pilotos
    { path: 'comment', component: FormularioComponent }, // Equipos y pilotos
    { path: 'drivers', component: DriversComponent }, // Pilotos
    { path: 'drivers/:driver/:session', component: DriverDetailsComponent }, // Pilotos
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir a inicio si la ruta no existe  
];

