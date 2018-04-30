import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  panelOpenState: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      hideRequired: 'true',
      vstsHideRequired: 'true'
    });
    this.secondFormGroup = this.formBuilder.group({
      dockerInstall: 'true'
    });
  }





}
