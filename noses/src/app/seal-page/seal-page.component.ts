import { Component, OnInit } from '@angular/core';
import { SealDataService } from "../seal-data.service";
import { FlaskBackendService } from '../flask-backend.service';
import { MatTableModule, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Observations } from '../Observations';

@Component({
  selector: 'app-seal-page',
  templateUrl: './seal-page.component.html',
  styleUrls: ['./seal-page.component.scss']
})
export class SealPageComponent implements OnInit {

  constructor(private sealData: SealDataService,
              private apiService: FlaskBackendService) { }

  seal: any;
  sealRow: Observations;
  jseal: any;
  dataSource: any;
  datas: any;
  displayedColumns: string[] = ['ObservationID', 'AgeClass', 'sex', 'date', 'SLOCode','Comments',  'actions', 'Edit'];
  show: any = false

  sealForm = new FormGroup({
    ageClass: new FormControl(''),
    sex: new FormControl(''),
    date: new FormControl(''),
    slo: new FormControl(''),
    comments: new FormControl('')
  });


  ngOnInit() {
    this.sealData.currentSeal.subscribe(currentSeal  => {
      this.seal = currentSeal;
      this.jseal = JSON.stringify(currentSeal);

      // this.obsID = { 'SealID': row['ObservationID'], 'tag1': row['TagNumber1'], 'Mark': row['MarkID']};
      this.datas = this.apiService.getSeal(this.jseal);
      this.datas.then(msg => {
        this.dataSource = new MatTableDataSource(<any> msg);
      });

    });
  }

  editObs(row) {
    this.sealRow = row;
    this.show = !this.show;

  }

  onSubmit() {

    if(this.sealForm.value.ageClass != "") {
      console.log("updating")
      this.apiService.updateAgeClass(JSON.stringify({'obsID': this.sealRow.ObservationID, 'age': this.sealForm.value.ageClass})).subscribe(() => this.apiService.readObs());
    }

  }

  toggleForm() {
    console.log(this.show);
  }

}
