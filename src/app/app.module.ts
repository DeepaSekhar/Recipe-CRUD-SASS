import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ListRecipiesComponent } from './recipies/list-recipies/list-recipies.component';
import { CreateRecipiesComponent } from './recipies/create-recipies/create-recipies.component';
import { RecipeService } from './recipies/recipe.service';
import { EditRecipiesComponent } from './recipies/edit-recipies/edit-recipies.component';
import { HomeRecipiesComponent } from './recipies/home-recipies/home-recipies.component';

const appRoutes: Routes = [
  { path: "home", component: HomeRecipiesComponent },
  { path: "list", component: ListRecipiesComponent },
  { path: "create", component: CreateRecipiesComponent },
  { path: "edit/:id", component: EditRecipiesComponent },
  { path: "", redirectTo: '/list', pathMatch: "full" }
]
@NgModule({
  declarations: [
    AppComponent,
    ListRecipiesComponent,
    CreateRecipiesComponent,
    EditRecipiesComponent,
    HomeRecipiesComponent
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
