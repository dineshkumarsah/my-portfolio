import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        loadChildren: ()=>import('./pages/home/home.route').then(m=>m.routes)
    },
    {
        path: "experience",
        loadComponent: ()=>import('./pages/experience/experience.component').then(m=>m.ExperienceComponent)
    }
];
