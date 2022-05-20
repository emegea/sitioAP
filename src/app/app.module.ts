import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth/auth.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SocialComponent } from './componentes/social/social.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';

import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuiensoyComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    FooterComponent,
    SocialComponent,
    ExperienciaComponent,
    TarjetaComponent,
    EditarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgCircleProgressModule.forRoot({}),
    AuthRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
