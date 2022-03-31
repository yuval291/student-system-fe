import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { LoginComponent } from "./login/login.component";


const appRoutes:Routes =[
    {path: '', component:LoginComponent},
    {path: 'home/:id' , component:CoursesComponent},
    {path: 'edit/:id' , component:EditUserComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRotingModule {

}

export const routingComponent = [LoginComponent,CoursesComponent]