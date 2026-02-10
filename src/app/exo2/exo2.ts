import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-exo2',
  imports: [FormsModule],
  templateUrl: './exo2.html',
  styleUrl: './exo2.css',
})
export class Exo2 {
    UrlPhoto! : string;
    NomComplet! : string;
    Email! : string;
    DateNaissance! : string;
    Genre! : string;
    Langues! : string[]
}
