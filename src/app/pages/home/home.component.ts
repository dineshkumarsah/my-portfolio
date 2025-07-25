import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector:'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl:'./home.component.scss',
    imports:[RouterOutlet,CommonModule,RouterLink,]
})
export class HomeComponent{}