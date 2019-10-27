import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' },
  { 
    path: '#', 
    redirectTo: '#', 
    pathMatch: 'full' },    
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },    

  // {
  //   path: 'databaseOffers/:id/:mode', 
  //   component: DatabaseOfferComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
