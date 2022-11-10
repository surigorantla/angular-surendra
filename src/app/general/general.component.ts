import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { debounceTime, Observable, Observer, of, switchMap } from 'rxjs';

@Component({
  selector: 'general',
  templateUrl: 'general.component.html',
  styles: [],
})
export class GeneralComponent implements OnInit {
  generalForm: FormGroup = new FormGroup({
    isLrpAtOrg: new FormControl('', [Validators.required]),
    isForHealth: new FormControl('', [Validators.required]),
    orgType: new FormControl('', Validators.required),
    medicalPractice: new FormControl(''),
    orgNameSearch: new FormControl('', Validators.required),
    orgName: new FormControl('', Validators.required),
    noMatchingLegalName: new FormControl(''),
    isPHIPA: new FormControl(''),
  });
  orgTypes?: any[];
  filterdOrgs?: any[];
  filteredOrgs$?: Observable<any[]>;
  individualHICs = ['cpso', 'cno', 'wic'];
  selectedOrgType: string = '';
  noMatchedOrg: boolean = false;

  submitted: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredOrgs$ = new Observable(
      (observer: Observer<string | undefined>) => {
        observer.next(this.f['orgNameSearch'].value);
      }
    ).pipe(
      debounceTime(250),
      switchMap((orgName: string) => {
        if (orgName && this.selectedOrgType) {
          this.f['orgName'].reset();
          this.noMatchedOrg = true;
          return of([]);
        }
        return of([]);
      })
    );
  }
  onOrgNameSelect(event: TypeaheadMatch): void {
    this.noMatchedOrg = false;
    this.f['orgName'].setValue((<any>event.item).PROVNAMEORG);
  }

  clearOrgName() {
    this.noMatchedOrg = true;
    this.f['orgName'].reset();
    this.f['orgNameSearch'].reset();
  }

  onSelectOrgType(event: any) {
    this.selectedOrgType = event.target.value;
  }
  isIndividiualHICSelected() {
    return this.individualHICs.indexOf(this.selectedOrgType) != -1;
  }
  toControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.generalForm.controls;
  }
  back() {}
  submit() {
    this.submitted = true;
    this.generalForm.markAllAsTouched();
  }
}
