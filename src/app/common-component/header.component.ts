import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    styleUrl: './header.component.scss',
    templateUrl: './header.component.html',
    standalone: true,
    imports:[]
})
export class HeaderComponent {
    isOpen: boolean=false
 constructor(){

 }
 toggleMenu(){
  this.isOpen=!this.isOpen
 }
}