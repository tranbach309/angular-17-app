import {Component, inject, OnInit, signal} from '@angular/core';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {
  count = signal(0);
  count$ = toObservable(this.count);
  dataService = inject(DataService);
  data = toSignal(this.dataService.data$);

  ngOnInit(): void {
    this.count$.subscribe(value => console.log('Count changed: ', value));
  }


}
