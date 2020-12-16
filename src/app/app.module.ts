import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { StudentModule } from "./student/student.module";
import { StudentService } from "./student.service";
import { StudentComponent } from "./student/student.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: StudentComponent
  }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StudentModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [StudentService]
})
export class AppModule {}
