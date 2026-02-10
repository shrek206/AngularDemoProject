import { Routes } from '@angular/router';
import { exo } from './Exercices/exo';

export const routes: Routes = [
    {
        path: "Exercices",
        loadChildren: () => import("./Exercices/exo.routes")
        .then(r => r.routes)
    },  
];
