import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector:'app-header',
    styleUrl: './header.component.scss',
    templateUrl: './header.component.html',
    standalone: true,
    imports:[RouterLink]
})
export class HeaderComponent {
    isOpen: boolean=false
 constructor(){

 }
 toggleMenu(){
  this.isOpen=!this.isOpen
 }
 
}