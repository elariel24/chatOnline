import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate: [NologinGuard] },
  { path: 'resultados', loadChildren: './componentes/resultados/resultados.module#ResultadosPageModule' },
  { path: 'videos', loadChildren: './componentes/videos/videos.module#VideosPageModule' },
  { path: 'estimaciones', loadChildren: './componentes/estimaciones/estimaciones.module#EstimacionesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
