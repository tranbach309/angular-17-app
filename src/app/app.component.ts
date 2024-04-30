import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignalComponent} from "./components/signal/signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-app';
}
