import { Injectable } from '@angular/core';
import * as http from "node:http";
import {ReplaySubject, Subject, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data$: any;
  // destroyed$ = new ReplaySubject<void>(1);
  // data$ = http.get('...').pipe(takeUntil(this.destroyed$));

  constructor() { }



}
