import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  imports: [],
  templateUrl: './exo1.html',
  styleUrl: './exo1.css',
})
export class Exo1 {
  firstNameAndLastName : string = "kevin Grignard";
  AdresseMail : string = "kgrignard8@gmail.com";
  DateNaissance : string = "30-08-2004";
  Genre : string = "Homme";
  Langues : string[] = ["Français", "Anglais"];
  URLphoto : string = "https://images.mubicdn.net/images/cast_member/16551/cache-2284-1478101707/image-w856.jpg";
}
