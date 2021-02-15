import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : 'accounts' , component : AppComponent},
  {path : 'create-account' , component : AppComponent},
  {path : 'contacts' , component : AppComponent},
  {path : 'create-contact' , component : AppComponent},
  {path : 'activities' , component : AppComponent},
  {path : 'create-activity' , component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
