import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { MatTableModule,
        MatTableDataSource,
        MatPaginator,
        MatSelect,
        MatDialog,
        MatDialogRef,
        MatTooltip,
        MAT_DIALOG_DATA } from '@angular/material';
// import { FormGroup, FormControl } from '@angular/forms';
import { FlaskBackendService } from '../_services/flask-backend.service';
import { sqlUser } from '../_supporting_classes/sqlUser';
import { AuthService } from "../_services/auth.service";


export interface DialogData {
  PermissionsLevel: number;
}


@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent {

  public selectAdmin = 0;


  /**
   * Constructor for this Angular Component. 
   * @param dialogRef 
   * @param data 
   * @param apiService 
   */
  constructor(private apiService: FlaskBackendService,
              public dialogRef: MatDialogRef<EditUserDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  /**
   * 
   */
  onNoClick(): void {
    // this.data = undefined;
    this.dialogRef.close();
  }

}
