import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exo1 } from "./exo1/exo1";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularDemoProject');
}
