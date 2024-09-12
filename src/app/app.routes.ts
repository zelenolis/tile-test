import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./components/body/body.component").then((mod) => mod.BodyComponent)
  }
];
