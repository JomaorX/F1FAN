import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverDetailsComponent } from './pages/driver-details/driver-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página de inicio
    { path: 'noticias', component: NoticiasComponent }, // Noticias de F1
    { path: 'calendario', component: CalendarioComponent }, // Próximas carreras
    { path: 'equipos', component: EquiposComponent }, // Equipos y pilotos
    { path: 'drivers', component: DriversComponent }, // Pilotos
    { path: 'drivers/:driver/:session', component: DriverDetailsComponent }, // Pilotos
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir a inicio si la ruta no existe  
];

