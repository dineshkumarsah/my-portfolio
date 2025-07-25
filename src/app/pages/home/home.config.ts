import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./home.route";

export const appConfig: ApplicationConfig={
    providers: [provideRouter(routes)]
}