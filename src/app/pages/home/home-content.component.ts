import { Component } from "@angular/core";

@Component({
    selector:"app-home-cotent",
    standalone: true,
    template:`
   <div class="flex items-center justify-center min-h-screen text-center">
  <div>
    <p class="text-3xl font-bold">Hi, I am Dinesh Sah</p>
    <p class="mt-2 text-lg">
      <span>Software Engineer III</span> | <span>Full Stack Developer</span>
    </p>
    <p class="mt-2 text-gray-400">
      Java, Spring Boot, MYSQL, MongoDB, J Unit | JavaScript, Angular 18, Jasmine & Karma | Docker , Kubernate8
    </p>
    
  </div>
</div>

    
    `,
    imports:[]
})
export class HomeContent{}