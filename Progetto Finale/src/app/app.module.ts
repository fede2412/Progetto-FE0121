import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FattureComponent } from './fatture/fatture.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { ModificaFattureComponent } from './fatture/modifica-fatture/modifica-fatture.component';
import { ModificaClienteComponent } from './clienti/modifica-cliente/modifica-cliente.component';
import { ClienteFattureComponent } from './fatture/cliente-fatture/cliente-fatture.component';
import { AggiungiClienteComponent } from './clienti/aggiungi-cliente/aggiungi-cliente.component';
import { AggiungiFatturaComponent } from './fatture/aggiungi-fattura/aggiungi-fattura.component';
import { EliminaFatturaComponent } from './fatture/elimina-fattura/elimina-fattura.component';
import { EliminaClienteComponent } from './clienti/elimina-cliente/elimina-cliente.component';
import { AggiungiFatturaDaIdComponent } from './fatture/aggiungi-fattura-da-id/aggiungi-fattura-da-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FattureComponent,
    UtentiComponent,
    ClientiComponent,
    ModificaFattureComponent,
    ModificaClienteComponent,
    ClienteFattureComponent,
    AggiungiClienteComponent,
    AggiungiFatturaComponent,
    EliminaFatturaComponent,
    EliminaClienteComponent,
    AggiungiFatturaDaIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
