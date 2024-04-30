import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-signal',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './signal.component.html',
	styleUrl: './signal.component.scss',
})
export class SignalComponent implements OnInit {
	firstName = signal('Jane');
	lastName = signal('Doe');
	fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
	firstName$ = toObservable(this.firstName);
	array = signal([1, 2, 3]);

	constructor() {
		effect(() => console.log('Name changed: ', this.fullName()));
		effect(() => console.log('Array changed: ', this.array()));
		this.array()
			.filter((value) => value % 2 === 0)
			.forEach((value) => console.log('Even number: ', value));
	}

	setName(newName: string) {
		this.firstName.set(newName);
	}

	ngOnInit(): void {
		this.firstName$.subscribe((value) => console.log('First name changed: ', value));
		if (this.fullName() == 'Jane Doe') {
			console.log('Full name is Jane Doe');
		}
	}
}
