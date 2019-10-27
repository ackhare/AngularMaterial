import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TreeDynamicExample} from './treeDynamicExample/tree-dynamic-example';
const routes: Routes = [  
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' },
  { 
    path: '#', 
    redirectTo: '#', 
    pathMatch: 'full' },    
  {
    path: 'treeNode',
    component: TreeDynamicExample
  },    

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
