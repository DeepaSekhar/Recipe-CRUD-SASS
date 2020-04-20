import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ListRecipiesComponent } from './recipies/list-recipies/list-recipies.component';
import { CreateRecipiesComponent } from './recipies/create-recipies/create-recipies.component';
import { RecipeService } from './recipies/recipe.service';

const appRoutes: Routes = [
  { path: "list", component: ListRecipiesComponent },
  { path: "create", component: CreateRecipiesComponent },
  { path: " ", redirectTo: '/list', pathMatch: "full" }
]
@NgModule({
  declarations: [
    AppComponent,
    ListRecipiesComponent,
    CreateRecipiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
