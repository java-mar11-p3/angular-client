import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatPaginatorModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatPaginatorModule,
    MatButtonToggleModule
  ]
})
export class AngMaterialModule { }
