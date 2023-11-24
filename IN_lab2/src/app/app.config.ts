import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";

import { HomeComponent } from "./home.component";
import { SignInComponent } from "./authorization/sign-in/sign-in.component"
import { SignUpComponent } from "./authorization/sign-up/sign-up.component"
import { PrivacyPolicyComponent } from "./privacy-policy.component";
import { NotFoundComponent } from "./not-found.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "**", component: NotFoundComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
