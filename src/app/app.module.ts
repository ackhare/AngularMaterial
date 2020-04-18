import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {TreeDynamicExample} from './treeDynamicExample/tree-dynamic-example';
import {MulipleTabPagination} from './multiplePagination/mulipleTab-pagination.component';
import { CommonModule } from '@angular/common';
import {AngularDemoService} from './service/angularDemoService';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { MatPaginatorModule } from '@angular/material/paginator';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from "@angular/material";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CookieService } from 'ngx-cookie-service';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TreeDynamicExample ,
    SidenavListComponent,
    MulipleTabPagination
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  MatProgressBarModule
  ],
  providers: [
    RxFormBuilder, 
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    },
    CookieService,
    AngularDemoService
  ],
  exports: [
    
  ],
  entryComponents: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
