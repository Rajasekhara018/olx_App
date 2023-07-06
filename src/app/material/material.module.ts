import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
const MaterialArray = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatStepperModule,
  MatPaginatorModule,
  MatButtonModule,
  FormsModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatCardModule,
  MatDialogModule,
  MatTabsModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatChipsModule
];
@NgModule({
  imports: [MaterialArray],
  exports: [MaterialArray],
})
export class MaterialModule {}
