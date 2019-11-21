import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from "./_services/auth.service";
import { AuthGuard } from "./_services/auth.guard";
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { UploadSealComponent } from './upload-seal/upload-seal.component';
import {
          MatButtonModule,
          MatDialogModule,
          MatListModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
        } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PapaParseModule } from 'ngx-papaparse';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { SealPageComponent } from './seal-page/seal-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { ApproveObsComponent } from './approve-obs/approve-obs.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DialogOverviewExampleDialog } from './manage-accounts/manage-accounts.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { MenuComponent } from './menu/menu.component';
import { AllObservationsComponent } from './all-observations/all-observations.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestAccountComponent } from './request-account/request-account.component';
import { ComponentForAngServiceComponent } from './component-for-ang-service/component-for-ang-service.component';

import { CitizenSciBulkUploadMainPageComponent } from './citizen-scientist-upload-management/citizen-sci-bulk-upload-main-page/citizen-sci-bulk-upload-main-page.component';
import { CitizenSciBulkUploadDataPreviewComponent } from './citizen-scientist-upload-management/citizen-sci-bulk-upload-data-preview/citizen-sci-bulk-upload-data-preview.component';
import { BulkUploadObservationViewComponent } from './citizen-scientist-upload-management/bulk-upload-observation-view/bulk-upload-observation-view.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalSingleObservationComponent } from './form-modal-single-observation/form-modal-single-observation.component';

const config = {
    apiKey: "AIzaSyCJXpZDV0cQVK6kyg8B95PC5Iq1fRyRFJ4",
    authDomain: "noses-346ed.firebaseapp.com",
    databaseURL: "https://noses-346ed.firebaseio.com",
    projectId: "noses-346ed",
    storageBucket: "noses-346ed.appspot.com",
    messagingSenderId: "924457799797"
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    VerifyEmailComponent,
    UploadSealComponent,
    SealPageComponent,
    ManageAccountsComponent,
    ApproveObsComponent,
    DialogOverviewExampleDialog,
    EditUserDialogComponent,
    MenuComponent,
    AllObservationsComponent,
    ResetPasswordComponent,
    RequestAccountComponent,
    ComponentForAngServiceComponent,
    CitizenSciBulkUploadMainPageComponent,
    CitizenSciBulkUploadDataPreviewComponent,
    BulkUploadObservationViewComponent,
    FormModalSingleObservationComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    PapaParseModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  exports: [
    RouterModule,
    DialogOverviewExampleDialog,
    EditUserDialogComponent,
    FormModalSingleObservationComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    EditUserDialogComponent,
    FormModalSingleObservationComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
