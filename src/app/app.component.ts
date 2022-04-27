import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  detailform = new FormGroup({
    firstname: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    city: new FormControl(''),
  });

  gridOptionsTest;
  constructor() {
    this.gridOptionsTest = {
      columnDefs: [
        { headerName: 'Full Name', field: 'fulName' },
        { headerName: 'Age', field: 'age' },
        { headerName: 'City', field: 'city' },
      ],
    };
    this.gridOptionsTest.rowData = [];
  }

  addDetail() {
    var fulName =
      this.detailform.value.firstname + ' ' + this.detailform.value.lastName;
    var city = this.detailform.value.city;
    var age = this.detailform.value.dob;
    var showAge;
    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
    this.gridOptionsTest.rowData.push({
      fulName: fulName,
      age: showAge,
      city: city,
    });
    console.log(this.gridOptionsTest.rowData);
  }
}
