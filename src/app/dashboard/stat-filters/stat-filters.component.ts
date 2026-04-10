import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class StatFiltersComponent implements OnInit {
  search: FormGroup;

  constructor(fb: FormBuilder) {
    this.search = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)],
    });
   }

  ngOnInit() {
  }

  submit() {
    console.log(this.search.value);
  }
}
