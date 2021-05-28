import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"fatture",component:FattureComponent},
  {path:"utenti",component:UtentiComponent},
  {path:"clienti",component:ClientiComponent},
  {path:"fatture/:id", component:ModificaFattureComponent},
  {path:"clienti/:id",component:ModificaClienteComponent},
  {path:"fatture_cliente/:id",component:ClienteFattureComponent},
  {path:"aggiungi_cliente",component:AggiungiClienteComponent},
  {path:"aggiungi_fattura/:id",component:AggiungiFatturaComponent},
  {path:"elimina_fattura/:id",component:EliminaFatturaComponent},
  {path:"elimina_cliente/:id",component:EliminaClienteComponent},
  {path:"aggiungi_fattura",component:AggiungiFatturaDaIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
