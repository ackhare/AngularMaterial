import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatMenuModule,
  MatTableModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule, 
  MatCardModule,
  MatTabsModule, 
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSortModule,
  MatSelectModule,  
  MatAutocompleteModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatDialogModule,
  MatGridListModule,
  MatTreeModule,
  MatDividerModule,
  MatListModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatExpansionModule

} from '@angular/material';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDialogModule,
    MatGridListModule,
    MatTreeModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    CdkTreeModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}