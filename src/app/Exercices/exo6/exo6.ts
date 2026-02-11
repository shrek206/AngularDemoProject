import { Component } from '@angular/core';
import { ConvertTempPipe } from "../../shared/pipe/convert-temp-pipe";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-exo6',
  imports: [ConvertTempPipe, FormsModule],
  templateUrl: './exo6.html',
  styleUrl: './exo6.css',
})
export class Exo6 {
result:number = 0;
source: 'celsius' | 'fahrenheit' = "celsius";
dest: 'celsius' | 'fahrenheit' = "fahrenheit";


}
