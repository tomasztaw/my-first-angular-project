import { Component, OnInit } from '@angular/core';
import { PatientService } from './service/patient.service';
import { CustomHttpResponse } from './interface/httpResponse';
import { Patient } from './interface/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'my-first-angular-project';

  httpResponse: CustomHttpResponse | undefined;
  patients: Patient[] | undefined;

  constructor(private patientService: PatientService) {}
  
  
  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      response => {
        this.httpResponse = response;
        this.patients = response.data;
      },
      error => console.log(error)
    );
  }
}
