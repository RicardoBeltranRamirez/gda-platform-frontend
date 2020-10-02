import { NgModule, LOCALE_ID } from '@angular/core';

import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BienesComponent } from './bienes.component';
import { CrearBienComponent } from './crear-bien.component';
import { VerBienComponent } from './ver-bien/ver-bien.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthGuard } from '../../modules/auth/_services/auth.guard';
//import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';

import es from '@angular/common/locales/es';
import { HistorialComponent } from './historial/historial.component';
import { EditarBienComponent } from './editar-bien/editar-bien.component';
registerLocaleData(es);
@NgModule({
  declarations: [BienesComponent, CrearBienComponent, VerBienComponent, HistorialComponent, EditarBienComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BienesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'nuevo',
        component: CrearBienComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ver',
        component: VerBienComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'editar',
        component: EditarBienComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'historial',
        component: HistorialComponent,
        canActivate: [AuthGuard],
      },
    ]),
    //DashboardsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-ES"}
  ]
})
export class BienesModule {}
