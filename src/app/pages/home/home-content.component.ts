import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"app-home-cotent",
    standalone: true,
    template:`
   <div class="flex items-center justify-center min-h-screen text-center">
  <div>
    <p class="text-3xl font-bold">Hi, I am Dinesh Sah</p>
    <p class="mt-2 text-lg">
     <span>5.7 years of experience</span> | <span>Software Engineer III</span> | <span>Full Stack Developer</span>
    </p>
    <p class="mt-2 text-gray-400">
      Java, Spring Boot, MYSQL, MongoDB, J Unit | JavaScript, Angular 18, Jasmine & Karma | Docker , Kubernate8
    </p>
    <button (click)="experience()" class="border border-sky-500 text-sky-500 px-4 py-2 rounded hover:bg-sky-500 hover:text-white curssor-pointer">Experience</button>
  </div>
</div>

    
    `,
    imports:[]
})
export class HomeContent{
    constructor(private routr :Router ){

    }
    experience(){
     this.routr.navigate(['/experience'])
    }
}