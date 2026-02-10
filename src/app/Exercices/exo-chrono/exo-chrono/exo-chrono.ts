import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-exo-chrono',
  imports: [],
  templateUrl: './exo-chrono.html',
  styleUrl: './exo-chrono.css',
})
export class ExoChrono {
    temps = signal(0);
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