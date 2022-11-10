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
  selector: 'eligibility',
  templateUrl: 'eligibility.component.html',
  styles: [],
})
export class EligibilityComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
