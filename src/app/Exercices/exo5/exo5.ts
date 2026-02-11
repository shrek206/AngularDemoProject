import { Component, signal } from '@angular/core';
import { FormatAffichafePipe } from "../../shared/pipe/format-affichafe-pipe";

@Component({
  selector: 'app-exo5',
  imports: [FormatAffichafePipe],
  templateUrl: './exo5.html',
  styleUrl: './exo5.css',
})
export class Exo5 {
  temps = signal(55);
    tempsID?: number;
    estEnCours = signal(false); 

    demarrer() {
      if (this.estEnCours()) return;
      
      this.estEnCours.set(true);
      this.tempsID = setInterval(() => {
        this.temps.update(val => val + 1);
      }, 1000);
    }
    
    Stop(){
      clearInterval(this.tempsID);
      this.estEnCours.set(false);
    }

    reset() {
      this.Stop();
      this.temps.set(0);
    }
}
