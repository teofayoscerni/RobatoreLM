import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { PaymentComponent } from './componentes/payment/payment.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'jugador',component: JugadorComponent},
  {path: 'jugadores',component: JugadoresComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'navbar',component: NavbarComponent},
  {path: 'payment',component: PaymentComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];
