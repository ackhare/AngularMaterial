import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TreeDynamicExample} from './treeDynamicExample/tree-dynamic-example';
import {MulipleTabPagination} from './multiplePagination/mulipleTab-pagination.component';
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

  {
    path: 'mulipleTabPagination', 
    component: MulipleTabPagination
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
