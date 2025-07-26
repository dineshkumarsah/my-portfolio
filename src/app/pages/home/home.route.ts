import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home.component').then(m => m.HomeComponent),
        children: [
            {
                path: 'content',
                loadComponent: () => import('./home-content.component').then(m => m.HomeContent)
            },
            {
                path: '',
                redirectTo: 'content',
                pathMatch:"full"
            }
        ]
    }

]