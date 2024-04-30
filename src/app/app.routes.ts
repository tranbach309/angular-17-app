import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SignalComponent} from "./components/signal/signal.component";

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signal', component: SignalComponent },
];
