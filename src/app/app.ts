import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exo1 } from "./exo1/exo1";
import { Exo2 } from "./exo2/exo2";
import { ExoChrono } from "./exo-chrono/exo-chrono";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exo1, Exo2, ExoChrono],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularDemoProject');
}
