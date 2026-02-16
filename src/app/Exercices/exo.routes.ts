import { Routes } from "@angular/router";
import { exo } from "./exo";

export const routes: Routes = [
    { path: '', component: exo },
    {
        path: 'exo2',
        loadComponent: () => import("./exo2/exo2/exo2").then(e => e.Exo2)
    },

    {
        path: 'exo1',
        loadComponent: () => import("./exo1/exo1/exo1").then(e => e.Exo1)
    },

    {
        path: 'exo-chrono',
        loadComponent: () => import("./exo-chrono/exo-chrono/exo-chrono").then(e => e.ExoChrono)
    },

    {
        path: 'exo4',
        loadComponent: () => import("./exo4/exo4/exo4").then(e => e.Exo4)
    },

    {
        path: 'exo5',
        loadComponent: () => import("./exo5/exo5").then(e => e.Exo5)
    },

    {
        path: 'exo6',
        loadComponent: () => import("./exo6/exo6").then(e => e.Exo6)
    },

    {
        path: 'exo7',
        loadComponent: () => import("./exo7/exo7").then(e => e.Exo7)
    }
]